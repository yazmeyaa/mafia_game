"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const config_1 = require("@app/config");
const user_1 = require("@app/models/user");
const jsonwebtoken_1 = require("jsonwebtoken");
async function checkAuth(req, res, next) {
    const { auth } = req.cookies;
    if (!auth || typeof auth !== 'string')
        return res.status(401).json({
            error: "Missed auth cookie"
        });
    try {
        const { username } = (0, jsonwebtoken_1.verify)(auth, config_1.appConfig.jwtSecret);
        const user = await user_1.Users.findOne({ where: { username } });
        res.locals.user = user;
        next();
    }
    catch (err) {
        if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
            res.status(401).send({
                error: err.message
            });
        }
        res.status(401).send({
            error: "something went wrong"
        });
    }
}
exports.checkAuth = checkAuth;
