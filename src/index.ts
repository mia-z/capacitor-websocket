import { registerPlugin } from '@capacitor/core';

import type { WebsocketPluginPlugin } from './definitions';

const WebsocketPlugin = registerPlugin<WebsocketPluginPlugin>('WebsocketPlugin', {
  web: () => import('./web').then(m => new m.WebsocketPluginWeb()),
});

export * from './definitions';
export { WebsocketPlugin };
