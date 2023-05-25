import { WebPlugin } from "@capacitor/core";
import { SocketMetadata } from "./definitions";

import type { BuildOptions, CapacitorWebsocketPlugin, OptionsBase, SendOptions } from "./definitions";

export class CapacitorWebsocketPluginWeb extends WebPlugin implements CapacitorWebsocketPlugin {
    private sockets: SocketMetadata[] = [];

    async connect(options: OptionsBase): Promise<void> {
        const sIndex = this.getSocketMetadataIndex(options.name);
        const sockMeta = this.getSocketMetadata(sIndex);

        console.log(sockMeta.name + " is connecting");

        let count = 0;
        const s = new WebSocket(sockMeta.url);

        s.onclose = () => {
            console.log(`${sockMeta.name} is closing.`);
            this.notifyListeners(`${options.name}:disconnected`, null);
            sockMeta.connected = false;
            sockMeta.socket = null;
        }

        s.onerror = () => {
            this.notifyListeners(`${options.name}:error`, null);
        }

        s.onmessage = (data: any) => {
            this.notifyListeners(`${options.name}:message`, data);
        }

        while(s.CONNECTING || s.CLOSING) {
            await timeout(500);
            count++;
            if (count > 20) break;
        }

        if (count === 20) {
            throw new Error("Socket timeout (10s)");
        }

        if (s.OPEN) {
            console.log(`${sockMeta.name} connected.`);
            sockMeta.connected = true;
            this.notifyListeners(`${options.name}:connected`, null);
            return;
        }

        throw new Error("Couldnt build websocket connection with name: " + options.name);
    }

    async disconnect(options: OptionsBase): Promise<void> {
        const sIndex = this.getSocketMetadataIndex(options.name);
        const sockMeta = this.getSocketMetadata(sIndex);

        if (!sockMeta.connected || !sockMeta.socket) {
            throw new Error("Tried to disconnect an already disconnected socket!");
        }

        sockMeta.connected = false;
        sockMeta.socket.close();
        sockMeta.socket = null;

        this.sockets.splice(sIndex, 1);
        return;
    }

    async send(options: SendOptions): Promise<void> {
        const sIndex = this.getSocketMetadataIndex(options.name);
        const sockMeta = this.getSocketMetadata(sIndex);

        if (!sockMeta.connected || !sockMeta.socket) {
            throw new Error("Tried to send to a disconnected socket!");
        }

        sockMeta.socket.send(options.data);
        return;
    }

    async applyListeners(_options: OptionsBase): Promise<void> {
        // do nothing - we apply listeners during connect phase
    }

    async build(options: BuildOptions): Promise<void> {
        const entry = { socket: null, name: options.name, url: options.url, connected: false };
        this.sockets.push(entry);
    }

    private verifySocket(name: string): SocketMetadata {
        const socketToFind = this.sockets.find(x => x.name === name);
        if (!socketToFind) {
            throw new Error("Couldnt get socket with name: " + name);
        }
        return socketToFind;
    }

    private getSocketMetadata(sIndex: number): SocketMetadata {
        return this.sockets[sIndex];
    }

    private getSocketMetadataIndex(name: string): number {
        const socketToFind = this.verifySocket(name);
        return this.sockets.indexOf(socketToFind);
    }
}

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));