import { appConfig } from "@app/config";
import { Sequelize } from "sequelize";


export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: appConfig.mysql.url,
    port: Number.parseInt(appConfig.mysql.port),
    username: appConfig.mysql.user,
    password: appConfig.mysql.password,
    database: appConfig.mysql.database,

    logging: console.log
})