import { UserWithoutSecretFields } from "src/backend_api"

export type RoomType = {
    id: string
    name: string
    description: string | null
    users: UserWithoutSecretFields[]
    players: {
        current: number
        max: number
    }
}