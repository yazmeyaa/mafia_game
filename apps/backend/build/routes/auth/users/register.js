"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const user_1 = require("@app/models/user");
const bcrypt_1 = require("bcrypt");
async function register(req, res) {
    const { password, username } = req.body;
    if (!username || username.trim().length === 0)
        return res.status(400).json({
            error: "Missed usernmame field"
        });
    if (!password || password.trim().length === 0)
        return res.status(400).json({
            error: "Missing password field"
        });
    const isUserAvailable = await user_1.Users.findOne({ where: { username } });
    if (!!isUserAvailable)
        return res.status(400).json({
            error: "This username is already taken"
        });
    const bcryptedPassword = await (0, bcrypt_1.hash)(password, 10);
    await user_1.Users.create({
        username,
        password: bcryptedPassword
    });
    return res.status(200).json({
        message: "Successfull created new user!"
    });
}
exports.register = register;
