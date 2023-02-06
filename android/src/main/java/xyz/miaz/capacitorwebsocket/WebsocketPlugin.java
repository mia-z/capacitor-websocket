package xyz.miaz.capacitorwebsocket;

import android.util.Log;

public class WebsocketPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
