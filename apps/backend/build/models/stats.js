"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStats = void 0;
const sequelize_1 = require("@modules/sequelize");
const sequelize_2 = require("sequelize");
const UserStats = sequelize_1.sequelize.define('UserStats', {
    games: {
        type: sequelize_2.DataTypes.INTEGER
    },
    wins: {
        type: sequelize_2.DataTypes.INTEGER
    },
    loses: {
        type: sequelize_2.DataTypes.INTEGER
    }
});
exports.UserStats = UserStats;
