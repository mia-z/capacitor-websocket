# websocket

Basic websocket for capacitor

## Install

```bash
npm install websocket
npx cap sync
```

## API

<docgen-index>

* [`connect()`](#connect)
* [`disconnect()`](#disconnect)
* [`send(...)`](#send)
* [`applyListeners()`](#applylisteners)
* [`build(...)`](#build)
* [`addListener('message', ...)`](#addlistenermessage)
* [`addListener('connected', ...)`](#addlistenerconnected)
* [`addListener('disconnected', ...)`](#addlistenerdisconnected)
* [`addListener('statechange', ...)`](#addlistenerstatechange)
* [`addListener('closeframe', ...)`](#addlistenercloseframe)
* [`addListener('connecterror', ...)`](#addlistenerconnecterror)
* [`addListener('error', ...)`](#addlistenererror)
* [`addListener('messageerror', ...)`](#addlistenermessageerror)
* [`addListener('senderror', ...)`](#addlistenersenderror)
* [`addListener('textmessageerror', ...)`](#addlistenertextmessageerror)
* [`addListener('textmessage', ...)`](#addlistenertextmessage)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connect()

```typescript
connect() => Promise<void>
```

--------------------


### disconnect()

```typescript
disconnect() => Promise<void>
```

--------------------


### send(...)

```typescript
send(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

--------------------


### applyListeners()

```typescript
applyListeners() => Promise<void>
```

--------------------


### build(...)

```typescript
build(options: { authToken: string; }) => Promise<void>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ authToken: string; }</code> |

--------------------


### addListener('message', ...)

```typescript
addListener(eventName: "message", listenerFunc: (event: MessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| **`eventName`**    | <code>'message'</code>                                                    |
| **`listenerFunc`** | <code>(event: <a href="#messageevent">MessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('connected', ...)

```typescript
addListener(eventName: "connected", listenerFunc: (event: ConnectedEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>'connected'</code>                                                      |
| **`listenerFunc`** | <code>(event: <a href="#connectedevent">ConnectedEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('disconnected', ...)

```typescript
addListener(eventName: "disconnected", listenerFunc: (event: DisconnectedEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'disconnected'</code>                                                         |
| **`listenerFunc`** | <code>(event: <a href="#disconnectedevent">DisconnectedEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('statechange', ...)

```typescript
addListener(eventName: "statechange", listenerFunc: (event: StateChangedEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'statechange'</code>                                                          |
| **`listenerFunc`** | <code>(event: <a href="#statechangedevent">StateChangedEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('closeframe', ...)

```typescript
addListener(eventName: "closeframe", listenerFunc: (event: CloseFrameEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                            |
| ------------------ | ------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'closeframe'</code>                                                       |
| **`listenerFunc`** | <code>(event: <a href="#closeframeevent">CloseFrameEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('connecterror', ...)

```typescript
addListener(eventName: "connecterror", listenerFunc: (event: ConnectErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'connecterror'</code>                                                         |
| **`listenerFunc`** | <code>(event: <a href="#connecterrorevent">ConnectErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('error', ...)

```typescript
addListener(eventName: "error", listenerFunc: (event: ErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| **`eventName`**    | <code>'error'</code>                                                  |
| **`listenerFunc`** | <code>(event: <a href="#errorevent">ErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('messageerror', ...)

```typescript
addListener(eventName: "messageerror", listenerFunc: (event: MessageErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'messageerror'</code>                                                         |
| **`listenerFunc`** | <code>(event: <a href="#messageerrorevent">MessageErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('senderror', ...)

```typescript
addListener(eventName: "senderror", listenerFunc: (event: SendErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>'senderror'</code>                                                      |
| **`listenerFunc`** | <code>(event: <a href="#senderrorevent">SendErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('textmessageerror', ...)

```typescript
addListener(eventName: "textmessageerror", listenerFunc: (event: TextMessageErrorEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'textmessageerror'</code>                                                             |
| **`listenerFunc`** | <code>(event: <a href="#textmessageerrorevent">TextMessageErrorEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('textmessage', ...)

```typescript
addListener(eventName: "textmessage", listenerFunc: (event: TextMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'textmessage'</code>                                                        |
| **`listenerFunc`** | <code>(event: <a href="#textmessageevent">TextMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### MessageEvent

<code>{ data: string }</code>


#### ConnectedEvent

<code>{ headers: { [x: string]: string[] } }</code>


#### DisconnectedEvent

<code>{ closedByServer: boolean, serverCloseFrame: string, clientCloseFrame: string }</code>


#### StateChangedEvent

<code>{ state: string }</code>


#### CloseFrameEvent

<code>{ frame: string }</code>


#### ConnectErrorEvent

<code>{ exception: string }</code>


#### ErrorEvent

<code>{ cause: string }</code>


#### MessageErrorEvent

<code>{ cause: string, frame: string }</code>


#### SendErrorEvent

<code>{ cause: string, frame: string }</code>


#### TextMessageErrorEvent

<code>{ data: string,  cause: string }</code>


#### TextMessageEvent

<code>{ data: string }</code>

</docgen-api>
