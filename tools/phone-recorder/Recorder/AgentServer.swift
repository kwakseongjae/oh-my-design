import Network
import XCTest

/// A small HTTP server inside the UI test runner, so that an agent on the Mac can look at the device and act on it:
/// see the screen, read the accessibility tree, tap, swipe, type, launch apps, answer system alerts.
/// Requests arrive on a background queue and wait in `jobs`; the test's own thread runs them (XCUITest calls belong
/// there) and sends the answer.
final class AgentServer {
    struct Request { let method: String; let path: String; let query: [String: String]; let body: [String: Any] }
    struct Response { var status = 200; var type = "application/json"; var data = Data() }
    private struct Job { let request: Request; let reply: (Response) -> Void }

    private let listener: NWListener
    private let queue = DispatchQueue(label: "agent-server")
    private let lock = NSLock()
    private var jobs: [Job] = []
    var quit = false

    init(port: UInt16) throws {
        listener = try NWListener(using: .tcp, on: NWEndpoint.Port(rawValue: port)!)
    }

    func start() {
        listener.newConnectionHandler = { [weak self] connection in
            connection.start(queue: self?.queue ?? .global())
            self?.receive(connection, buffer: Data())
        }
        listener.start(queue: queue)
    }

    /// Run what has arrived. Called from the test thread.
    func drain(_ handle: (Request) -> Response) {
        lock.lock(); let pending = jobs; jobs.removeAll(); lock.unlock()
        for job in pending { job.reply(handle(job.request)) }
    }

    private func receive(_ connection: NWConnection, buffer: Data) {
        connection.receive(minimumIncompleteLength: 1, maximumLength: 1 << 20) { [weak self] data, _, done, error in
            guard let self = self else { return }
            var buffer = buffer
            if let data = data { buffer.append(data) }
            if let request = Self.parse(buffer) {
                let job = Job(request: request) { response in
                    var head = "HTTP/1.1 \(response.status) \(response.status == 200 ? "OK" : "Error")\r\n"
                    head += "Content-Type: \(response.type)\r\nContent-Length: \(response.data.count)\r\nConnection: close\r\n\r\n"
                    connection.send(content: head.data(using: .utf8)! + response.data, completion: .contentProcessed { _ in connection.cancel() })
                }
                self.lock.lock(); self.jobs.append(job); self.lock.unlock()
            } else if done || error != nil {
                connection.cancel()
            } else {
                self.receive(connection, buffer: buffer)
            }
        }
    }

    /// One whole HTTP/1.1 request, or nil while it is still arriving.
    private static func parse(_ data: Data) -> Request? {
        guard let split = data.range(of: Data("\r\n\r\n".utf8)), let head = String(data: data[..<split.lowerBound], encoding: .utf8) else { return nil }
        let lines = head.components(separatedBy: "\r\n")
        let first = lines[0].split(separator: " ")
        guard first.count >= 2 else { return nil }
        var length = 0
        for line in lines.dropFirst() where line.lowercased().hasPrefix("content-length:") {
            length = Int(line.split(separator: ":")[1].trimmingCharacters(in: .whitespaces)) ?? 0
        }
        let bodyData = data[split.upperBound...]
        guard bodyData.count >= length else { return nil }
        let target = String(first[1])
        let parts = target.split(separator: "?", maxSplits: 1)
        var query: [String: String] = [:]
        if parts.count > 1 {
            for pair in parts[1].split(separator: "&") {
                let kv = pair.split(separator: "=", maxSplits: 1)
                query[String(kv[0])] = kv.count > 1 ? (String(kv[1]).removingPercentEncoding ?? String(kv[1])) : ""
            }
        }
        let body = (try? JSONSerialization.jsonObject(with: bodyData.prefix(length))) as? [String: Any] ?? [:]
        return Request(method: String(first[0]), path: String(parts[0]), query: query, body: body)
    }
}
