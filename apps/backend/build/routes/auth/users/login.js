"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = require("bcrypt");
const user_1 = require("@app/models/user");
const jwt_1 = require("@app/utils/jwt");
const wrongAuthResponse = {
    error: "Username or password wrong"
};
async function login(req, res) {
    const { password, username } = req.body;
    if (!username || username.trim().length === 0)
        return res.status(400).json({
            error: "Missed usernmame field"
        });
    if (!password || password.trim().length === 0)
        return res.status(400).json({
            error: "Missing password field"
        });
    const user = await user_1.Users.findOne({ where: { username } });
    if (!user)
        return res.status(401).send(wrongAuthResponse);
    const correctPassword = await (0, bcrypt_1.compare)(password, user.password);
    if (!correctPassword)
        return res.status(401).send(wrongAuthResponse);
    const token = (0, jwt_1.createToken)(username);
    const responsePayload = {
        user: user,
        token,
        message: "Successfull authenticated"
    };
    responsePayload.user.password = undefined;
    res.cookie('auth', token, { httpOnly: true });
    return res.status(200).json(responsePayload);
}
exports.login = login;
