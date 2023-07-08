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
}

/** Setup server variables in ```appConfig``` */
export function loadServerVariables() {
    appConfig.server = {
        port: 3000
    }
    appConfig.server.port = Number(process.env.EXPRESS_PORT) ?? 3000
    appConfig.mysql = getMySQLConfig()
    appConfig.redis = getRedisConfig()
}
export const appConfig: AppConfig = { //* Here can be used default settings
} as AppConfig

loadServerVariables()
