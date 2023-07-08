import type { RawData, WebSocket } from "ws";

interface Data {
    msg: RawData,
    isBinary: boolean
}

function wsLobbyHandler(data: Data, ws: WebSocket): void {
    const { msg } = data
}

export { wsLobbyHandler }