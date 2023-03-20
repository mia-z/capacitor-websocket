//
//  WebsocketConnection.swift
//  Plugin
//
//  Created by Ryan Cockram on 2023-03-16.
//  Copyright © 2023 Max Lynch. All rights reserved.
//

import Foundation
import NWWebSocket
import Network
import Capacitor

class SocketConnection {
    private var connected: Bool = false
    var socket: NWWebSocket?
    var pluginContext: CAPPlugin
    var name: String
    
    init(name: String, plugin: CAPPlugin, socket: NWWebSocket) {
        self.name = name
        self.pluginContext = plugin
        self.socket = socket
    }
    
    public func connect() {
        if !self.connected {
            self.socket?.connect()
            self.connected = true
        }
    }
    
    public func disconnect() {
        if self.connected {
            self.socket?.disconnect()
            self.connected = false
        }
    }
    
    public func bind() {
        socket?.delegate = self
    }
}

extension SocketConnection: WebSocketConnectionDelegate {
    public func webSocketDidConnect(connection: WebSocketConnection) {
        // Respond to a WebSocket connection event
        self.pluginContext.notifyListeners("\(name):connected", data: ["iosnoop": ""])
    }

    public func webSocketDidDisconnect(
        connection: WebSocketConnection,
        closeCode: NWProtocolWebSocket.CloseCode, reason: Data?) {
        // Respond to a WebSocket disconnection event
        self.pluginContext.notifyListeners("\(name):disconnected", data: ["code": closeCode, "reason": reason ?? "Unknown"])
    }

    public func webSocketViabilityDidChange(connection: WebSocketConnection, isViable: Bool) {
        // Respond to a WebSocket connection viability change event
    }

    public func webSocketDidAttemptBetterPathMigration(result: Result<WebSocketConnection, NWError>) {
        // Respond to when a WebSocket connection migrates to a better network path
        // (e.g. A device moves from a cellular connection to a Wi-Fi connection)
    }

    public func webSocketDidReceiveError(connection: WebSocketConnection, error: NWError) {
        // Respond to a WebSocket error event
        self.pluginContext.notifyListeners("\(name):error", data: ["cause": error])
    }

    public func webSocketDidReceivePong(connection: WebSocketConnection) {
        // Respond to a WebSocket connection receiving a Pong from the peer
    }

    public func webSocketDidReceiveMessage(connection: WebSocketConnection, string: String) {
        // Respond to a WebSocket connection receiving a `String` message
        self.pluginContext.notifyListeners("\(name):message", data: ["data": string])
    }

    public func webSocketDidReceiveMessage(connection: WebSocketConnection, data: Data) {
        // Respond to a WebSocket connection receiving a binary `Data` message
        self.pluginContext.notifyListeners("\(name):message", data: ["data": data])
    }
}
