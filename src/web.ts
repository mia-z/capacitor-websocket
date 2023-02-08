import { WebPlugin } from '@capacitor/core';

import type { DggChatSocketPlugin } from './definitions';

export class DggChatSocketPluginWeb extends WebPlugin implements DggChatSocketPlugin {
  //@ts-ignore
  connect(options: { authToken: string; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  disconnect(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  //@ts-ignore
  send(options: { data: string; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  applyListeners(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  //@ts-ignore
  build(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
