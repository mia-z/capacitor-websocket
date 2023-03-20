import Foundation
import Capacitor
import Network
import NWWebSocket

@objc(CapacitorWebsocketPlugin)
public class CapacitorWebsocketPlugin: CAPPlugin {
    var connections: [String: SocketConnection] = [:]

    @objc public func build(_ call: CAPPluginCall) {
        guard let url = call.getString("url") else {
            call.reject("Must provide a socket URL")
            return
        }

        guard let name = call.getString("name") else {
            call.reject("Must provide a socket name")
            return
        }

        let config: NWProtocolWebSocket.Options = NWProtocolWebSocket.Options()

        if let headers = call.getObject("headers") {
            var newHeaders: [(String, String)] = []
            for (key, value) in headers {
                newHeaders.append((key, value as! String))
            }
            config.setAdditionalHeaders(newHeaders)
        }
        guard let socketURL = URL(string: url) else { call.reject("Couldnt make socket: url parse error"); return }

        connections[name] = SocketConnection.init(name: name, plugin: self, socket: NWWebSocket(url: socketURL))
        call.resolve()
    }

    @objc public func applyListeners(_ call: CAPPluginCall) {
        guard let connection = getSocket(call) else { return }
        connection.bind()
        call.resolve()
    }

    @objc public func connect(_ call: CAPPluginCall) {
        guard var connection = getSocket(call) else { return }
        connection.connect()
        call.resolve()
    }

    @objc public func disconnect(_ call: CAPPluginCall) {
        guard var connection = getSocket(call) else { return }
        connection.disconnect()
        call.resolve()
    }

    @objc public func send(_ call: CAPPluginCall) {
        guard let connection = getSocket(call) else { return }
        guard let message = call.getString("data") else {
            call.reject("Must provide data to send")
            return
        }
        connection.socket?.send(string: message)
        call.resolve()
    }

    private func getSocket(_ call: CAPPluginCall) -> SocketConnection? {
        guard let name = call.getString("name") else {
            call.reject("Must provide a socket name")
            return nil
        }

        return connections[name]
    }
}
