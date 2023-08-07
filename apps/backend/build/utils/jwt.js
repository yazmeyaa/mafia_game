"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const config_1 = require("@app/config");
const jsonwebtoken_1 = require("jsonwebtoken");
function createToken(username) {
    const { jwtSecret } = config_1.appConfig;
    return (0, jsonwebtoken_1.sign)({ username }, jwtSecret, {
        expiresIn: '1d'
    });
}
exports.createToken = createToken;
