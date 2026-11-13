import XCTest

/// Watches the device's screen while someone (or something) walks through an app, and keeps each distinct, settled
/// screen as the device's own PNG plus the accessibility tree of the app in front.
///
/// Environment (pass as TEST_RUNNER_<NAME> to xcodebuild):
///   REC_BUNDLE     bundle id of the app whose tree is read (default: none, screenshots only)
///   REC_LAUNCH     "1" brings REC_BUNDLE to the front first (default "0": leave the phone as it is)
///   REC_SECONDS    how long to watch (default 60)
///   REC_INTERVAL   seconds between looks (default 0.6)
///   REC_MAX        most frames to keep (default 60)
///
/// A frame is kept when the screen differs from the last kept frame and two looks in a row agree (so a transition
/// in flight is not kept). The status bar is left out of the comparison: its clock changes every minute.
/// Everything is attached to the test result; export with `xcrun xcresulttool export attachments`.
final class RecorderUITests: XCTestCase {
    func testRecord() throws {
        let env = ProcessInfo.processInfo.environment
        let bundle = env["REC_BUNDLE"].flatMap { $0.isEmpty ? nil : $0 }
        let seconds = Double(env["REC_SECONDS"] ?? "") ?? 60
        let interval = Double(env["REC_INTERVAL"] ?? "") ?? 0.6
        let maxFrames = Int(env["REC_MAX"] ?? "") ?? 60
        let app = bundle.map { XCUIApplication(bundleIdentifier: $0) }
        if env["REC_LAUNCH"] == "1" { app?.activate() }

        var kept: [UInt8]? = nil
        var previous: [UInt8]? = nil
        var count = 0
        var log: [[String: Any]] = []
        let started = Date()
        let end = started.addingTimeInterval(seconds)
        while Date() < end && count < maxFrames {
            let shot = XCUIScreen.main.screenshot()
            let sig = Self.signature(shot.image)
            let settled = previous.map { Self.distance($0, sig) < 0.004 } ?? false
            let isNew = kept.map { Self.distance($0, sig) >= 0.012 } ?? true
            if settled && isNew {
                count += 1
                let name = String(format: "frame-%03d", count)
                let png = XCTAttachment(data: shot.pngRepresentation, uniformTypeIdentifier: "public.png")
                png.name = name + ".png"; png.lifetime = .keepAlways; add(png)
                var entry: [String: Any] = ["frame": name, "t": Date().timeIntervalSince(started),
                                            "width": shot.image.size.width * shot.image.scale, "height": shot.image.size.height * shot.image.scale]
                // Read the tree only while that app is in front: a snapshot of a backgrounded app waits seconds and fails.
                if let app = app, app.state == .runningForeground {
                    let t0 = Date()
                    if let tree = try? app.snapshot().dictionaryRepresentation, let data = try? JSONSerialization.data(withJSONObject: Self.jsonSafe(tree), options: [.sortedKeys]) {
                        let a = XCTAttachment(data: data, uniformTypeIdentifier: "public.json")
                        a.name = name + ".tree.json"; a.lifetime = .keepAlways; add(a)
                        entry["tree"] = true
                    } else {
                        let a = XCTAttachment(string: app.debugDescription)
                        a.name = name + ".tree.txt"; a.lifetime = .keepAlways; add(a)
                        entry["tree"] = "text"
                    }
                    entry["treeSeconds"] = Date().timeIntervalSince(t0)
                } else if app != nil {
                    entry["tree"] = "app not in front"
                }
                log.append(entry)
                kept = sig
            }
            previous = sig
            Thread.sleep(forTimeInterval: interval)
        }
        let flow: [String: Any] = ["bundle": bundle ?? NSNull(), "seconds": Date().timeIntervalSince(started), "frames": log,
                                   "device": UIDevice.current.name, "system": UIDevice.current.systemVersion, "model": UIDevice.current.model]
        let data = try JSONSerialization.data(withJSONObject: flow, options: [.prettyPrinted, .sortedKeys])
        let a = XCTAttachment(data: data, uniformTypeIdentifier: "public.json")
        a.name = "flow.json"; a.lifetime = .keepAlways; add(a)
    }

    /// A 24 x 48 greyscale thumbnail of the screen below the status bar.
    static func signature(_ image: UIImage) -> [UInt8] {
        let w = 24, h = 48
        var pixels = [UInt8](repeating: 0, count: w * h)
        guard let cg = image.cgImage, let ctx = CGContext(data: &pixels, width: w, height: h, bitsPerComponent: 8, bytesPerRow: w,
                                                           space: CGColorSpaceCreateDeviceGray(), bitmapInfo: CGImageAlphaInfo.none.rawValue) else { return pixels }
        let top = CGFloat(cg.height) * 0.07   // status bar
        let crop = cg.cropping(to: CGRect(x: 0, y: top, width: CGFloat(cg.width), height: CGFloat(cg.height) - top)) ?? cg
        ctx.interpolationQuality = .low
        ctx.draw(crop, in: CGRect(x: 0, y: 0, width: w, height: h))
        return pixels
    }

    /// Share of thumbnail pixels that differ by more than 12 grey levels.
    static func distance(_ a: [UInt8], _ b: [UInt8]) -> Double {
        guard a.count == b.count, !a.isEmpty else { return 1 }
        var n = 0
        for i in 0..<a.count where abs(Int(a[i]) - Int(b[i])) > 12 { n += 1 }
        return Double(n) / Double(a.count)
    }

    /// The snapshot dictionary holds enum-keyed and non-JSON values; keep what serialises.
    static func jsonSafe(_ value: Any) -> Any {
        if let d = value as? [XCUIElement.AttributeName: Any] {
            var out: [String: Any] = [:]
            for (k, v) in d { out[k.rawValue] = jsonSafe(v) }
            return out
        }
        if let d = value as? [String: Any] { return d.mapValues { jsonSafe($0) } }
        if let a = value as? [Any] { return a.map { jsonSafe($0) } }
        if value is String || value is NSNumber || value is NSNull { return value }
        return String(describing: value)
    }
}
