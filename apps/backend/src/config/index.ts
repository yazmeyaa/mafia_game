import { MySQLConfigType, getMySQLConfig } from "./mysql"
import { RedisConfigType, getRedisConfig } from "./redis"
import * as dotenv from 'dotenv'


dotenv.config({
    path: `.env`
})

interface AppConfig {
    server: {
        port: number
    },
    mysql: MySQLConfigType
    redis: RedisConfigType
    jwtSecret: string
}

/** Setup server variables in ```appConfig``` */
export function loadServerVariables() {
    appConfig.server = {
        port: 3000
    }
    appConfig.server.port = Number(process.env.EXPRESS_PORT) ?? 3000
    appConfig.mysql = getMySQLConfig()
    appConfig.redis = getRedisConfig()
    const JWTSecret = process.env.JWT_SECRET
    if (!JWTSecret) throw new Error('JWT Secret string is not provided (JWT_SECRET=...')
    appConfig.jwtSecret = JWTSecret
}
export const appConfig: AppConfig = { //* Here can be used default settings
} as AppConfig

loadServerVariables()

console.log('::CONFIG: ', appConfig)
