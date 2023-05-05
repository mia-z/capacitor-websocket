import { WebPlugin } from "@capacitor/core";

import type { BuildOptions, CapacitorWebsocketPlugin, OptionsBase, SendOptions } from "./definitions";
import { SocketConnection } from "./definitions";

export class CapacitorWebsocketPluginWeb extends WebPlugin implements CapacitorWebsocketPlugin {
    private sockets: { socket: SocketConnection, name: string }[] = [];

    async connect(options: OptionsBase): Promise<void> {
        console.log(options.name + " is connecting");
        return;
    }
    async disconnect(options: OptionsBase): Promise<void> {
        const sIndex = this.getSocketIndex(options.name);

        if (!this.sockets[sIndex].socket.connected) {
            throw new Error("Tried to disconnect an already disconnected socket!");
        }

        this.sockets[sIndex].socket.connected = false;
        this.sockets[sIndex].socket.socket.close();
        return;
    }
    async send(options: SendOptions): Promise<void> {
        const sIndex = this.getSocketIndex(options.name);

        if (!this.sockets[sIndex].socket.connected) {
            throw new Error("Tried to send to a disconnected socket!");
        }
        this.sockets.at(sIndex)?.socket.socket.send(options.data);
        return;
    }
    async applyListeners(options: OptionsBase): Promise<void> {
        const sIndex = this.getSocketIndex(options.name);

        if (this.sockets[sIndex].socket.connected) {
            throw new Error("Tried to apply listeners to a socket that is already connected!");
        }

        this.sockets[sIndex].socket.socket.onclose = () => {
            this.notifyListeners(`${options.name}:disconnected`, null);
        }

        this.sockets[sIndex].socket.socket.onerror = () => {
            this.notifyListeners(`${options.name}:error`, null);
        }

        this.sockets[sIndex].socket.socket.onmessage = (data: any) => {
            this.notifyListeners(`${options.name}:message`, data);
        }

        this.sockets[sIndex].socket.socket.onopen = () => {
            this.notifyListeners(`${options.name}:connected`, null);
        }
    }
    async build(options: BuildOptions): Promise<void> {
        let count = 0;
        const s = new WebSocket(options.url);
        while(s.CONNECTING || s.CLOSING) {
            await timeout(500);
            count++;
            if (count > 20) break;
        }

        if (count === 20) {
            throw new Error("Socket timeout (10s)");
        }

        if (s.OPEN) {
            this.sockets.push({ socket: new SocketConnection(s, options.name), name: options.name });
            return;
        }

        throw new Error("Couldnt build websocket connection with name: " + options.name);
    }

    private verifySocket(name: string): { socket: SocketConnection, name: string } {
        const socketToFind = this.sockets.find(x => x.name === name);
        if (!socketToFind) {
            throw new Error("Couldnt get socket with name: " + name);
        }
        return socketToFind;
    }

    private getSocketIndex(name: string): number {
        const socketToFind = this.verifySocket(name);
        return this.sockets.indexOf(socketToFind);
    }
}

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));