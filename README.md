# websocket

Very basic Android native (so far) websocket implementation for Capacitor, using NeoVisionaries (NV-WebSocket)

Doesnt have much redundancy or features. You can provide a URL and headers you wish to pass to the socket. 

As mentioned, only implemented for Android. 

Contributions are always welcome - especially for Swift/Web implementation. 

## Install

```bash
npm install @miaz/capacitor-websocket
npx cap sync
```

## Usage 

Rather than overriding Capacitor's addListener and notifyListener under the hood, create specific event names to the source they're coming from, separated with a colon and then the event name itself. 

```typescript
type EventSourceNames = "chat" | "live";

addListener<EventSourceNames>("chat:message", ...);
addListener<EventSourceNames>("live:message", ...);
```

## API

<docgen-index>

* [`connect(...)`](#connect)
* [`disconnect(...)`](#disconnect)
* [`send(...)`](#send)
* [`applyListeners(...)`](#applylisteners)
* [`build(...)`](#build)
* [`addListener(`${T}:message`, ...)`](#addlistenertmessage)
* [`addListener(`${T}:connected`, ...)`](#addlistenertconnected)
* [`addListener(`${T}:disconnected`, ...)`](#addlistenertdisconnected)
* [`addListener(`${T}:statechange`, ...)`](#addlistenertstatechange)
* [`addListener(`${T}:closeframe`, ...)`](#addlistenertcloseframe)
* [`addListener(`${T}:connecterror`, ...)`](#addlistenertconnecterror)
* [`addListener(`${T}:error`, ...)`](#addlistenerterror)
* [`addListener(`${T}:messageerror`, ...)`](#addlistenertmessageerror)
* [`addListener(`${T}:senderror`, ...)`](#addlistenertsenderror)
* [`addListener(`${T}:textmessageerror`, ...)`](#addlistenerttextmessageerror)
* [`addListener(`${T}:textmessage`, ...)`](#addlistenerttextmessage)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connect(...)

```typescript
connect(options: ConnectOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#optionsbase">OptionsBase</a></code> |

--------------------


### disconnect(...)

```typescript
disconnect(options: DisconnectOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#optionsbase">OptionsBase</a></code> |

--------------------


### send(...)

```typescript
send(options: SendOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#sendoptions">SendOptions</a></code> |

--------------------


### applyListeners(...)

```typescript
applyListeners(options: ApplyListenersOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#optionsbase">OptionsBase</a></code> |

--------------------


### build(...)

```typescript
build(options: BuildOptions) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#buildoptions">BuildOptions</a></code> |

--------------------


### addListener(`${T}:message`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:message`, listenerFunc: (event: MessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:message`</code>                                               |
| **`listenerFunc`** | <code>(event: <a href="#messageevent">MessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:connected`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:connected`, listenerFunc: (event: ConnectedEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:connected`</code>                                                 |
| **`listenerFunc`** | <code>(event: <a href="#connectedevent">ConnectedEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:disconnected`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:disconnected`, listenerFunc: (event: DisconnectedEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:disconnected`</code>                                                    |
| **`listenerFunc`** | <code>(event: <a href="#disconnectedevent">DisconnectedEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:statechange`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:statechange`, listenerFunc: (event: StateChangedEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:statechange`</code>                                                     |
| **`listenerFunc`** | <code>(event: <a href="#statechangedevent">StateChangedEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:closeframe`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:closeframe`, listenerFunc: (event: CloseFrameEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                            |
| ------------------ | ------------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:closeframe`</code>                                                  |
| **`listenerFunc`** | <code>(event: <a href="#closeframeevent">CloseFrameEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:connecterror`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:connecterror`, listenerFunc: (event: ConnectErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:connecterror`</code>                                                    |
| **`listenerFunc`** | <code>(event: <a href="#connecterrorevent">ConnectErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:error`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:error`, listenerFunc: (event: ErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:error`</code>                                             |
| **`listenerFunc`** | <code>(event: <a href="#errorevent">ErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:messageerror`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:messageerror`, listenerFunc: (event: MessageErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:messageerror`</code>                                                    |
| **`listenerFunc`** | <code>(event: <a href="#messageerrorevent">MessageErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:senderror`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:senderror`, listenerFunc: (event: SendErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:senderror`</code>                                                 |
| **`listenerFunc`** | <code>(event: <a href="#senderrorevent">SendErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:textmessageerror`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:textmessageerror`, listenerFunc: (event: TextMessageErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:textmessageerror`</code>                                                        |
| **`listenerFunc`** | <code>(event: <a href="#textmessageerrorevent">TextMessageErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(`${T}:textmessage`, ...)

```typescript
addListener<T extends string>(eventName: `${T}:textmessage`, listenerFunc: (event: TextMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>`${T}:textmessage`</code>                                                   |
| **`listenerFunc`** | <code>(event: <a href="#textmessageevent">TextMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### ConnectOptions

<code><a href="#optionsbase">OptionsBase</a></code>


#### OptionsBase

<code>{ name: string, }</code>


#### DisconnectOptions

<code><a href="#optionsbase">OptionsBase</a></code>


#### SendOptions

<code><a href="#optionsbase">OptionsBase</a> & { data: any }</code>


#### ApplyListenersOptions

<code><a href="#optionsbase">OptionsBase</a></code>


#### BuildOptions

<code><a href="#optionsbase">OptionsBase</a> & { url: string, headers?: { [headerKey: string]: string, } }</code>


#### MessageEvent

<code>{ data: string }</code>


#### ConnectedEvent

<code>{ headers: { [x: string]: string[] } }</code>


#### DisconnectedEvent

<code>{ closedByServer: boolean, serverCloseFrame: string, clientCloseFrame: string }</code>


#### StateChangedEvent

<code>{ state: string }</code>


#### CloseFrameEvent

<code>{ frame: string }</code>


#### ConnectErrorEvent

<code>{ exception: string }</code>


#### ErrorEvent

<code>{ cause: string }</code>


#### MessageErrorEvent

<code>{ cause: string, frame: string }</code>


#### SendErrorEvent

<code>{ cause: string, frame: string }</code>


#### TextMessageErrorEvent

<code>{ data: string, cause: string }</code>


#### TextMessageEvent

<code>{ data: string }</code>

</docgen-api>
