#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(CapacitorWebsocketPlugin, "CapacitorWebsocket",
           CAP_PLUGIN_METHOD(build, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(applyListeners, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(connect, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(disconnect, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(send, CAPPluginReturnPromise);
)
