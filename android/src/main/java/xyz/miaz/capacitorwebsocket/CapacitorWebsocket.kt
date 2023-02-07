package xyz.miaz.capacitorwebsocket

import android.util.Log

class CapacitorWebsocket {
    fun echo(value: String): String {
        Log.i("Echo", value)
        return value
    }
}