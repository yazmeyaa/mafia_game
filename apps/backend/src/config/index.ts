import { MySQLConfigType, getMySQLConfig } from "./mysql"
import { RedisConfigType, getRedisConfig } from "./redis"

interface AppConfig {
    server: {
        port: number
    },
    mysql: MySQLConfigType
    redis: RedisConfigType
}

export const appConfig: AppConfig = { //* Here can be used default settings
    server: {
        port: 3000
    },
} as AppConfig

export function loadServerVariables() {
    appConfig.server.port = Number(process.env.EXPRESS_PORT) ?? appConfig.server.port
    appConfig.mysql = getMySQLConfig()
    appConfig.redis = getRedisConfig()
}