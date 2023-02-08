import { WebPlugin } from '@capacitor/core';

import type { CapacitorWebsocketPlugin } from './definitions';

export class CapacitorWebsocketPluginWeb extends WebPlugin implements CapacitorWebsocketPlugin {
    applyListeners(): Promise<void> {
        return Promise.resolve(undefined);
    }
    //@ts-ignore
    build(options: { authToken: string }): Promise<void> {
        return Promise.resolve(undefined);
    }

    connect(): Promise<void> {
        return Promise.resolve(undefined);
    }

    disconnect(): Promise<void> {
        return Promise.resolve(undefined);
    }

    //@ts-ignore
    send(options: { data: string }): Promise<void> {
        return Promise.resolve(undefined);
    }

}
