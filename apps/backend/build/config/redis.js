"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRedisConfig = void 0;
/** Important keys to use Redis */
const requiredKeys = ['host', 'port', 'password', 'database'];
const defaultValues = {
    database: '0',
    host: '127.0.0.1',
    password: '',
    port: '6379'
};
/**
 * Retrieves Redis configuration from environment variables.
 * @returns {RedisConfigType} Object containing Redis configuration.
 * @throws {Error} If any of the required fields are missing in the environment variables.
 */
function getRedisConfig() {
    const obj = {}; //* It should be filled by next actions
    requiredKeys.forEach(key => {
        const envKey = `REDIS_${key.toUpperCase()}`;
        const value = process.env[envKey];
        obj[key] = value ?? defaultValues[key];
    });
    return obj;
}
exports.getRedisConfig = getRedisConfig;
