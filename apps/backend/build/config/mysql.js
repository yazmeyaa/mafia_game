"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMySQLConfig = void 0;
/** Important keys to use MySQL database */
const requiredKeys = ['port', 'url', 'user', 'password', 'database'];
const defaultValues = {
    port: '3306',
    url: 'localhost',
    user: 'root',
    password: '',
    database: 'defaultDatabase'
};
/**
 * Retrieves MySQL configuration from environment variables.
 * @returns {MySQLConfigType} Object containing MySQL configuration.
 * @throws {Error} If any of the required fields are missing in the environment variables.
 */
function getMySQLConfig() {
    const obj = {}; // It should be filled by next actions
    requiredKeys.forEach(key => {
        const envKey = `MYSQL_${key.toUpperCase()}`;
        const value = process.env[envKey];
        obj[key] = value ?? defaultValues[key];
    });
    return obj;
}
exports.getMySQLConfig = getMySQLConfig;
