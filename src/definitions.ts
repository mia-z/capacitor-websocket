import type { PluginListenerHandle, Plugin } from '@capacitor/core';

export type MessageEvent = {
    data: string
}

export type StateChangedEvent = {
    state: string
}

export type DisconnectedEvent = {
    closedByServer: boolean,
    serverCloseFrame: string,
    clientCloseFrame: string
}

export type CloseFrameEvent = {
    frame: string
}

export type ConnectedEvent = {
    headers: {
        [x: string]: string[]
    }
}

export type ConnectErrorEvent = {
    exception: string
}

export type ErrorEvent = {
    cause: string
}

export type MessageErrorEvent = {
    cause: string,
    frame: string
}

export type SendErrorEvent = {
    cause: string,
    frame: string
}

export type TextMessageEvent = {
    data: string
}

export type TextMessageErrorEvent = {
    data: string, 
    cause: string
}

export type OptionsBase = {
    name: string,
}

export type BuildOptions = OptionsBase & {
    url: string,
    headers?: {
        [headerKey: string]: string,
    }
}

export type SendOptions = OptionsBase & {
    data: any
}

export type ConnectOptions = OptionsBase;

export type DisconnectOptions = OptionsBase;

export type ApplyListenersOptions = OptionsBase;

export interface CapacitorWebsocketPlugin extends Plugin {
    connect(options: ConnectOptions): Promise<void>;
    disconnect(options: DisconnectOptions): Promise<void>;
    send(options: SendOptions): Promise<void>;
    applyListeners(options: ApplyListenersOptions): Promise<void>;
    build(options: BuildOptions): Promise<void>;
    addListener(eventName: "message", listenerFunc: (event: MessageEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "connected", listenerFunc: (event: ConnectedEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "disconnected", listenerFunc: (event: DisconnectedEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "statechange",listenerFunc: (event: StateChangedEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "closeframe",listenerFunc: (event: CloseFrameEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "connecterror",listenerFunc: (event: ConnectErrorEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "error",listenerFunc: (event: ErrorEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "messageerror",listenerFunc: (event: MessageErrorEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "senderror",listenerFunc: (event: SendErrorEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "textmessageerror",listenerFunc: (event: TextMessageErrorEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: "textmessage",listenerFunc: (event: TextMessageEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
}