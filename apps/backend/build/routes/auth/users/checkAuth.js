"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const config_1 = require("@app/config");
const jsonwebtoken_1 = require("jsonwebtoken");
async function checkAuth(req, res) {
    const { auth } = req.cookies;
    if (!auth || typeof auth !== 'string') {
        return res.status(400).send({
            error: "Missed auth cookie!"
        });
    }
    try {
        (0, jsonwebtoken_1.verify)(auth, config_1.appConfig.jwtSecret);
        return res.status(200).json({
            message: 'OK'
        });
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(400).json({
                error: error.message
            });
        }
        return res.status(400).json({
            error: "Something went wrong"
        });
    }
}
exports.checkAuth = checkAuth;
