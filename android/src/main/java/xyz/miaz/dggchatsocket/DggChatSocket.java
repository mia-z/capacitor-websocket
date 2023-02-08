package xyz.miaz.dggchatsocket;

import android.util.Log;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.neovisionaries.ws.client.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@CapacitorPlugin(name = "DggChatSocket")
public class DggChatSocket extends Plugin {
    private WebSocket socket;
    private String authToken;
    private boolean connected = false;

    @PluginMethod()
    public void build(PluginCall call) throws IOException {
        authToken = call.getString("authToken");
        build_local();
        call.resolve();
    }

    @PluginMethod()
    public void applyListeners(PluginCall call) {
        applyListeners_local();
        call.resolve();
    }

    @PluginMethod()
    public void connect(PluginCall call) throws WebSocketException {
        connect_local();
        call.resolve();
    }

    @PluginMethod()
    public void disconnect(PluginCall call) {
        disconnect_local();
        call.resolve();
    }

    @PluginMethod()
    public void send(PluginCall call) {
        socket.sendText(call.getString("data"));
        call.resolve();
    }

    private void applyListeners_local() {
        socket.clearListeners();

        socket.addListener(new WebSocketAdapter() {
            @Override
            public void onTextMessage(WebSocket websocket, String message) throws Exception {
                super.onTextMessage(websocket, message);
                JSObject ret = new JSObject();
                ret.put("data", message);
                notifyListeners("message", ret);
            }

            @Override
            public void onStateChanged(WebSocket websocket, WebSocketState newState) throws Exception {
                super.onStateChanged(websocket, newState);
                System.out.println(newState);
                JSObject ret = new JSObject();
                ret.put("state", newState);
                notifyListeners("statechanged", ret);
            }

            @Override
            public void onCloseFrame(WebSocket websocket, WebSocketFrame frame) throws Exception {
                super.onCloseFrame(websocket, frame);
                System.out.println("close frame");
                JSObject ret = new JSObject();
                ret.put("frame", frame);
                notifyListeners("closeframe", ret);
            }

            @Override
            public void onConnected(WebSocket websocket, Map<String, List<String>> headers) throws Exception {
                super.onConnected(websocket, headers);
                System.out.println("connected");
                JSObject ret = new JSObject();
                ret.put("headers", headers);
                notifyListeners("connected", ret);
            }

            @Override
            public void onDisconnected(WebSocket websocket, WebSocketFrame serverCloseFrame, WebSocketFrame clientCloseFrame, boolean closedByServer) throws Exception {
                super.onDisconnected(websocket, serverCloseFrame, clientCloseFrame, closedByServer);
                System.out.println("disconnected");
                JSObject ret = new JSObject();
                ret.put("closedByServer", closedByServer);
                ret.put("serverCloseFrame", serverCloseFrame);
                ret.put("clientCloseFrame", clientCloseFrame);
                notifyListeners("disconnected", ret);
            }

            @Override
            public void onConnectError(WebSocket websocket, WebSocketException exception) throws Exception {
                super.onConnectError(websocket, exception);
                JSObject ret = new JSObject();
                ret.put("exception", exception);
                notifyListeners("connecterror", ret);
            }

            @Override
            public void onError(WebSocket websocket, WebSocketException cause) throws Exception {
                super.onError(websocket, cause);
                JSObject ret = new JSObject();
                ret.put("cause", cause);
                notifyListeners("error", ret);
            }

            @Override
            public void onMessageError(WebSocket websocket, WebSocketException cause, List<WebSocketFrame> frames) throws Exception {
                super.onMessageError(websocket, cause, frames);
                JSObject ret = new JSObject();
                ret.put("cause", cause);
                ret.put("frame", frames);
                notifyListeners("messageerror", ret);
            }

            @Override
            public void onSendError(WebSocket websocket, WebSocketException cause, WebSocketFrame frame) throws Exception {
                super.onSendError(websocket, cause, frame);
                JSObject ret = new JSObject();
                ret.put("cause", cause);
                ret.put("frame", frame);
                notifyListeners("senderror", ret);
            }

            @Override
            public void onTextMessage(WebSocket websocket, byte[] data) throws Exception {
                super.onTextMessage(websocket, data);
                JSObject ret = new JSObject();
                ret.put("data", data);
                notifyListeners("textmessage", ret);
            }

            @Override
            public void onTextMessageError(WebSocket websocket, WebSocketException cause, byte[] data) throws Exception {
                super.onTextMessageError(websocket, cause, data);
                JSObject ret = new JSObject();
                ret.put("data", data);
                ret.put("cause", cause);
                notifyListeners("textmessageerror", ret);
            }
        });
    }

    private void connect_local() throws WebSocketException {
        if (!connected) {
            socket.connect();
            connected = true;
        }
    }

    private void disconnect_local() {
        if (connected) {
            socket.disconnect();
            connected = false;
        }
    }

    private void build_local() throws IOException {
        WebSocketFactory factory = new WebSocketFactory().setConnectionTimeout(5000);

        socket = factory.createSocket("wss://chat.destiny.gg/ws");

        socket.clearHeaders();
        socket.addHeader("User-Agent", "NeoVisionariesWebSocket-Appstiny");
        socket.addHeader("Origin", "https://www.destiny.gg");
        socket.addHeader("Cookie", "authtoken=" + authToken);
    }
}