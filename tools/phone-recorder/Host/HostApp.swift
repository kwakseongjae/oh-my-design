import SwiftUI

// The UI test bundle needs an app to be hosted by. This one does nothing.
@main
struct HostApp: App {
    var body: some Scene {
        WindowGroup {
            Text("oh-my-design recorder host").padding()
        }
    }
}
