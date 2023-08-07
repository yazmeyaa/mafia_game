"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = exports.ROOM_FIELDS = void 0;
exports.ROOM_FIELDS = [
    'description',
    'id',
    'name',
    'players',
    'users'
];
class Lobby {
    id;
    name;
    description;
    users;
    players;
    constructor(init) {
        this.id = init.id;
        this.name = init.name;
        this.description = init.description;
        this.users = init.users;
        this.players = init.players;
    }
    static restoreFromString(stringifiedObject) {
        try {
            const obj = JSON.parse(stringifiedObject);
            const objKeys = Object.keys(obj);
            let isKeysEqual = true;
            for (const key of objKeys) {
                if (exports.ROOM_FIELDS.includes(key) === false) {
                    isKeysEqual = false;
                    break;
                }
            }
            if (!isKeysEqual)
                return null;
            //* If object has all fields from ROOM_FIELDS
            return obj;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
exports.Lobby = Lobby;
