import { registerPlugin } from "@capacitor/core";

import type { DggChatSocketPlugin } from "./definitions";

const DggChatSocket = registerPlugin<DggChatSocketPlugin>("DggChatSocket", {
    web: () => import("./web").then(m => new m.DggChatSocketPluginWeb())
});

export * from "./definitions";
export { DggChatSocket };
