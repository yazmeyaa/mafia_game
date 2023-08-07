"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("@modules/sequelize");
const sequelize_2 = require("sequelize");
const stats_1 = require("./stats");
const Users = sequelize_1.sequelize.define('Users', {
    username: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: sequelize_2.DataTypes.STRING,
    },
    email: {
        type: sequelize_2.DataTypes.STRING,
        unique: true,
    },
});
exports.Users = Users;
Users.hasOne(stats_1.UserStats);
