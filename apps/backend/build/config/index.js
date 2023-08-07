"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = exports.loadServerVariables = void 0;
const mysql_1 = require("./mysql");
const redis_1 = require("./redis");
const dotenv = __importStar(require("dotenv"));
dotenv.config({
    path: `.env`
});
/** Setup server variables in ```appConfig``` */
function loadServerVariables() {
    exports.appConfig.server = {
        port: 3000
    };
    exports.appConfig.server.port = Number(process.env.EXPRESS_PORT) ?? 3000;
    exports.appConfig.mysql = (0, mysql_1.getMySQLConfig)();
    exports.appConfig.redis = (0, redis_1.getRedisConfig)();
    const JWTSecret = process.env.JWT_SECRET;
    if (!JWTSecret)
        throw new Error('JWT Secret string is not provided (JWT_SECRET=...');
    exports.appConfig.jwtSecret = JWTSecret;
}
exports.loadServerVariables = loadServerVariables;
exports.appConfig = { //* Here can be used default settings
};
loadServerVariables();
