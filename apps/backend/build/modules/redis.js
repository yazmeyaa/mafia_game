"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const config_1 = require("@app/config");
const redis_1 = require("redis");
exports.redis = (0, redis_1.createClient)({
    socket: {
        host: config_1.appConfig.redis.host,
        port: Number.parseInt(config_1.appConfig.redis.port),
    },
    database: Number.parseInt(config_1.appConfig.redis.database)
});
