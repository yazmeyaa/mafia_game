import { type UserWithoutSecretFields } from 'types';
import { type RoomType } from 'types/src/lobby'

type RoomFields = keyof RoomType
export const ROOM_FIELDS: Readonly<Array<RoomFields>> = [
    'description',
    'id',
    'name',
    'players',
    'users'
] as const;

export class Lobby implements RoomType {
    id: string;
    name: string;
    description: string | null;
    users: UserWithoutSecretFields[];
    players: { current: number; max: number; };

    constructor(init: RoomType) {
        this.id = init.id
        this.name = init.name
        this.description = init.description
        this.users = init.users
        this.players = init.players
    }

    static checkIsObjLobbyType(obj: Record<string, any>): boolean {
        const objKeys = Object.keys(obj)
            let isKeysEqual = true
            for (const key of objKeys) {
                if (ROOM_FIELDS.includes(key as keyof RoomType) === false) {
                    isKeysEqual = false;
                    break;
                }
            }
        return isKeysEqual
    }

    static restoreFromString(stringifiedObject: string): Lobby | null {
        try {
            const obj = JSON.parse(stringifiedObject) as Record<string, any>
            const isValidObject = this.checkIsObjLobbyType(obj)
            if (!isValidObject) return null
            //* If object has all fields from ROOM_FIELDS
            return obj as Lobby
        }
        catch (error) {
            console.error(error)
            return null
        }
    }
}