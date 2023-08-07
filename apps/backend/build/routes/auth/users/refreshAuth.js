"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshAuth = void 0;
const config_1 = require("@app/config");
const user_1 = require("@app/models/user");
const jwt_1 = require("@app/utils/jwt");
const jsonwebtoken_1 = require("jsonwebtoken");
async function refreshAuth(req, res) {
    const { auth } = req.headers;
    if (!auth || typeof auth !== 'string') {
        return res.status(400).send({
            error: "Missed auth cookie!"
        });
    }
    try {
        const { username } = (0, jsonwebtoken_1.verify)(auth, config_1.appConfig.jwtSecret);
        const user = await user_1.Users.findOne({ where: { username } });
        if (!user)
            return res.status(400).json({
                error: "Something went wrong"
            });
        const token = (0, jwt_1.createToken)(username);
        user.password = undefined;
        res.cookie('auth', token);
        if (auth)
            return res.status(200).send({
                user: user,
                token,
                message: "Success"
            });
        else
            return res.status(401).send();
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
exports.refreshAuth = refreshAuth;
