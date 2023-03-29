import Foundation
import Capacitor
import Network
import Starscream
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

        guard let socketURL = URL(string: url) else { call.reject("Couldnt make socket: url parse error"); return }

        var req = URLRequest(url: socketURL);
        
        if let headers = call.getObject("headers") {
            for (key, value) in headers {
                req.addValue(value as! String, forHTTPHeaderField: key)
            }
        }
        
        connections[name] = SocketConnection.init(name: name, plugin: self, request: req)
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
        connection.socket?.write(string: message)
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
