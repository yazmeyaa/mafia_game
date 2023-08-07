import { acceptWebsocketData } from "@app/utils/websocket";
import type { RawData, WebSocket } from "ws";

interface Data {
    msg: RawData,
    isBinary: boolean
}

function wsLobbyHandler(data: Data, ws: WebSocket): void {
    const { msg, isBinary } = data
    const message = acceptWebsocketData(msg, isBinary)
    ws.send(JSON.stringify(msg))
}

export { wsLobbyHandler }