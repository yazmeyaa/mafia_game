import { appConfig } from "@app/config";
import { createClient } from "redis";

export const redis = createClient({
    socket: {
        host: appConfig.redis.host,
        port: Number.parseInt(appConfig.redis.port),
    },
    database: Number.parseInt(appConfig.redis.database)
})