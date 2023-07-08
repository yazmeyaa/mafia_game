import { BaseModel } from "models"

interface User extends BaseModel {
    username: string
    stats: UserStats
    name: string | null
    avaratUrl: string | null
}

interface UserStats {
    games: number
    wins: number
    loses: number
}

export type { User, UserStats }
