import { RawData } from "ws";

export function acceptWebsocketData(msg: RawData, isBinary: boolean) {
    return isBinary ? msg : msg.toString()
}