//
//  WebsocketConnection.swift
//  Plugin
//
//  Created by Ryan Cockram on 2023-03-16.
//

import Foundation
import Network
import Capacitor
import Starscream

class SocketConnection {
    private var connected: Bool = false
    var socket: WebSocket?
    var pluginContext: CAPPlugin
    var name: String
    
    init(name: String, plugin: CAPPlugin, request: URLRequest) {
        self.name = name
        self.pluginContext = plugin
        self.socket = WebSocket(request: request)
    }
    
    public func connect() {
        if !self.connected {
            self.socket?.connect()
        }
    }
    
    public func disconnect() {
        if self.connected {
            self.socket?.disconnect()
        }
    }
    
    public func bind() {
        socket?.onEvent = { event in
            switch event {
                case .connected(_):
                    self.connected = true
                    self.pluginContext.notifyListeners("\(self.name):connected", data: ["iosws": "connected"])
                case .disconnected(let reason, let code):
                    self.connected = false
                    self.pluginContext.notifyListeners("\(self.name):disconnected", data: ["code": code, "reason": reason ])
                case .text(let string):
                    self.pluginContext.notifyListeners("\(self.name):message", data: ["data": string])
                case .binary(let data):
                    self.pluginContext.notifyListeners("\(self.name):message", data: ["data": data])
                case .ping(_):
                    break
                case .pong(_):
                    break
                case .viabilityChanged(_):
                    break
                case .reconnectSuggested(_):
                    break
                case .cancelled:
                    self.connected = false
                case .error(let error):
                    self.connected = false
                    self.pluginContext.notifyListeners("\(self.name):error", data: ["cause": error ?? "Unknown Error"])
                case .peerClosed:
                    self.pluginContext.notifyListeners("\(self.name):message", data: ["data": "Peer closed"])
            }
        }
    }
}
