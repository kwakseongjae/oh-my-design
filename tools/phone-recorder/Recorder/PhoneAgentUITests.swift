import XCTest

/// Serves the device to an agent on the Mac for AGENT_MINUTES (default 20) on AGENT_PORT (default 8123).
/// Pass both as TEST_RUNNER_AGENT_PORT / TEST_RUNNER_AGENT_MINUTES. See tools/phone-recorder/phone.mjs for the client.
///
///   GET  /health                      device, system, screen size in points and its pixel scale
///   GET  /screen                      the device's own screenshot, PNG
///   GET  /elements?bundle=ID          the visible, labelled or interactive elements of that app, flat
///   GET  /tree?bundle=ID              the whole accessibility snapshot of that app
///   GET  /alert                       the system alert in front, if any: its text and button labels
///   POST /alert   {"button": "…"}     tap that button of the system alert
///   POST /tap     {"x":…, "y":…}      tap a point (screen points)
///   POST /swipe   {"x1","y1","x2","y2","seconds"}
///   POST /type    {"bundle","text"}   type into whatever has the keyboard in that app
///   POST /launch  {"bundle"}          bring an app to the front (does not restart it)
///   POST /terminate {"bundle"}
///   POST /home                        press the home button
///   POST /quit                        end the session
final class PhoneAgentUITests: XCTestCase {
    private let springboard = XCUIApplication(bundleIdentifier: "com.apple.springboard")

    // A failed XCUITest call (typing with no keyboard up, a tap on something that left) must not end the session.
    override func setUp() { continueAfterFailure = true }

    func testServe() throws {
        let env = ProcessInfo.processInfo.environment
        let port = UInt16(env["AGENT_PORT"] ?? "") ?? 8123
        let minutes = Double(env["AGENT_MINUTES"] ?? "") ?? 20
        let server = try AgentServer(port: port)
        server.start()
        let end = Date().addingTimeInterval(minutes * 60)
        while Date() < end && !server.quit {
            RunLoop.current.run(mode: .default, before: Date().addingTimeInterval(0.03))
            server.drain { request in
                if request.path == "/quit" { server.quit = true; return self.json(["ok": true]) }
                return self.handle(request)
            }
        }
    }

    private func handle(_ r: AgentServer.Request) -> AgentServer.Response {
        func app(_ source: [String: Any]) -> XCUIApplication? {
            let id = (source["bundle"] as? String) ?? r.query["bundle"]
            return id.flatMap { $0.isEmpty ? nil : XCUIApplication(bundleIdentifier: $0) }
        }
        func number(_ key: String) -> Double? { (r.body[key] as? NSNumber)?.doubleValue }
        func point(_ x: Double, _ y: Double) -> XCUICoordinate {
            springboard.coordinate(withNormalizedOffset: .zero).withOffset(CGVector(dx: x, dy: y))
        }
        switch (r.method, r.path) {
        case ("GET", "/health"):
            let shot = XCUIScreen.main.screenshot().image
            return json(["ok": true, "device": UIDevice.current.name, "system": UIDevice.current.systemVersion,
                         "width": shot.size.width, "height": shot.size.height, "scale": shot.scale])
        case ("GET", "/screen"):
            return AgentServer.Response(type: "image/png", data: XCUIScreen.main.screenshot().pngRepresentation)
        case ("GET", "/elements"), ("GET", "/tree"):
            guard let target = app([:]) else { return fail("bundle is required") }
            guard target.state == .runningForeground else { return json(["front": false, "state": target.state.rawValue, "elements": []]) }
            guard let snapshot = try? target.snapshot() else { return fail("the app's tree could not be read") }
            if r.path == "/tree" { return json(RecorderUITests.jsonSafe(snapshot.dictionaryRepresentation)) }
            var out: [[String: Any]] = []
            flatten(snapshot, screen: snapshot.frame, into: &out)
            return json(["front": true, "elements": out])
        case ("GET", "/alert"):
            let alert = springboard.alerts.firstMatch
            guard alert.exists else { return json(["alert": false]) }
            let texts = alert.staticTexts.allElementsBoundByIndex.map { $0.label }
            let buttons = alert.buttons.allElementsBoundByIndex.map { $0.label }
            return json(["alert": true, "texts": texts, "buttons": buttons])
        case ("POST", "/alert"):
            guard let label = r.body["button"] as? String else { return fail("button is required") }
            let button = springboard.alerts.firstMatch.buttons[label]
            guard button.exists else { return fail("no such button on the alert") }
            button.tap()
            return json(["ok": true])
        case ("POST", "/tap"):
            guard let x = number("x"), let y = number("y") else { return fail("x and y are required") }
            point(x, y).tap()
            return json(["ok": true])
        case ("POST", "/swipe"):
            guard let x1 = number("x1"), let y1 = number("y1"), let x2 = number("x2"), let y2 = number("y2") else { return fail("x1, y1, x2, y2 are required") }
            point(x1, y1).press(forDuration: 0.05, thenDragTo: point(x2, y2), withVelocity: .default, thenHoldForDuration: 0)
            return json(["ok": true])
        case ("POST", "/type"):
            guard let target = app(r.body), let text = r.body["text"] as? String else { return fail("bundle and text are required") }
            guard target.keyboards.firstMatch.exists else { return fail("no keyboard is up: tap a text field first") }
            target.typeText(text)
            return json(["ok": true])
        case ("POST", "/launch"):
            guard let target = app(r.body) else { return fail("bundle is required") }
            target.activate()
            return json(["ok": true, "state": target.state.rawValue])
        case ("POST", "/terminate"):
            guard let target = app(r.body) else { return fail("bundle is required") }
            target.terminate()
            return json(["ok": true])
        case ("POST", "/home"):
            XCUIDevice.shared.press(.home)
            return json(["ok": true])
        default:
            return fail("unknown request \(r.method) \(r.path)", status: 404)
        }
    }

    /// The elements an agent can act on or read: on screen, with a label or a value, or of an interactive kind.
    private func flatten(_ node: XCUIElementSnapshot, screen: CGRect, into out: inout [[String: Any]]) {
        let f = node.frame
        let visible = f.width > 0 && f.height > 0 && f.intersects(screen)
        let kind = Self.kind(node.elementType)
        let text = node.label.isEmpty ? (node.value as? String ?? "") : node.label
        if visible && node.elementType != .application && node.elementType != .window && (!text.isEmpty || Self.interactive.contains(node.elementType)) {
            var e: [String: Any] = ["i": out.count, "type": kind, "label": String(text.prefix(120)),
                                    "x": Int(f.minX), "y": Int(f.minY), "w": Int(f.width), "h": Int(f.height)]
            if !node.identifier.isEmpty { e["id"] = node.identifier }
            if !node.isEnabled { e["disabled"] = true }
            if node.isSelected { e["selected"] = true }
            if let placeholder = node.placeholderValue, !placeholder.isEmpty { e["placeholder"] = placeholder }
            out.append(e)
        }
        for child in node.children { flatten(child, screen: screen, into: &out) }
    }

    private static let interactive: Set<XCUIElement.ElementType> = [.button, .textField, .secureTextField, .searchField, .switch, .toggle, .link, .cell,
                                                                    .tab, .segmentedControl, .slider, .stepper, .picker, .menuItem, .checkBox, .radioButton, .textView]
    private static func kind(_ t: XCUIElement.ElementType) -> String {
        switch t {
        case .button: return "button"
        case .staticText: return "text"
        case .textField: return "textField"
        case .secureTextField: return "secureTextField"
        case .searchField: return "searchField"
        case .textView: return "textView"
        case .image: return "image"
        case .cell: return "cell"
        case .link: return "link"
        case .switch, .toggle: return "switch"
        case .tabBar: return "tabBar"
        case .tab: return "tab"
        case .navigationBar: return "navigationBar"
        case .alert: return "alert"
        case .sheet: return "sheet"
        case .scrollView: return "scrollView"
        case .table: return "table"
        case .collectionView: return "collectionView"
        case .segmentedControl: return "segmentedControl"
        case .slider: return "slider"
        case .picker: return "picker"
        case .webView: return "webView"
        case .keyboard: return "keyboard"
        case .other: return "other"
        default: return "type\(t.rawValue)"
        }
    }

    private func json(_ object: Any, status: Int = 200) -> AgentServer.Response {
        let data = (try? JSONSerialization.data(withJSONObject: object, options: [.sortedKeys])) ?? Data("{}".utf8)
        return AgentServer.Response(status: status, data: data)
    }
    private func fail(_ message: String, status: Int = 400) -> AgentServer.Response { json(["ok": false, "error": message], status: status) }
}
