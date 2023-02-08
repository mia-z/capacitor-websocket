import { registerPlugin } from "@capacitor/core";

import type { CapacitorWebsocketPlugin } from "./definitions";

const CapacitorWebsocket = registerPlugin<CapacitorWebsocketPlugin>("CapacitorWebsocket", {
    web: () => import("./web").then(m => new m.CapacitorWebsocketPluginWeb())
});

export * from "./definitions";
export { CapacitorWebsocket };
