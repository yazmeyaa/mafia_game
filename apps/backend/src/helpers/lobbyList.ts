import { redis } from "@app/modules/redis";
import { Lobby } from "@app/utils/websocket/lobby";
import { RoomType } from "types/src/lobby";

class LobbyList {
    async getList(): Promise<null | RoomType[]> {
        const response = await redis.get('lobby_list')
        if (!response || response.length === 0) return null
        try {
            const json = JSON.parse(response)
            if (Array.isArray(json) && json.every(item => Lobby.checkIsObjLobbyType(item))) {
                return json as RoomType[]
            } else {
                return null
            }
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async createLobby(lobby: RoomType): Promise<boolean> {
        const lobbyList = await this.getList()
        if(!lobbyList) {
            console.error('Cannot get list of lobbys')
            return false
        }
        lobbyList.push(lobby)
        await redis.set('lobby_list', JSON.stringify(lobbyList))
        return true
    }
}


export const lobbyList = new LobbyList()