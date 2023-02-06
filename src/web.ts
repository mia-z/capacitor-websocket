import { WebPlugin } from '@capacitor/core';

import type { WebsocketPluginPlugin } from './definitions';

export class WebsocketPluginWeb extends WebPlugin implements WebsocketPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
