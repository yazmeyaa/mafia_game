"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const config_1 = require("@app/config");
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: config_1.appConfig.mysql.url,
    port: Number.parseInt(config_1.appConfig.mysql.port),
    username: config_1.appConfig.mysql.user,
    password: config_1.appConfig.mysql.password,
    database: config_1.appConfig.mysql.database,
    logging: console.log
});
