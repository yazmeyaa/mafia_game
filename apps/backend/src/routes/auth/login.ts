import type { Request, Response } from "express";
import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { Users } from "@app/models/user";
import { appConfig } from "@app/config";

interface RequestBody {
    username: string,
    password: string,
}

const wrongAuthResponse = {
    error: "Username or password wrong"
}

async function login(req: Request<any, any, RequestBody>, res: Response) {
    const { password, username } = req.body
    if (!username || username.trim().length === 0) return res.status(400).json({
        error: "Missed usernmame field"
    })
    if (!password || password.trim().length === 0) return res.status(400).json({
        error: "Missing password field"
    })

    const user = await Users.findOne({ where: { username } })

    if (!user) return res.status(401).send(wrongAuthResponse)

    const correctPassword = await compare(password, user.password)

    if (!correctPassword) return res.status(401).send(wrongAuthResponse)

    const token = sign({ username: user.username }, appConfig.jwtSecret)

    const responsePayload = {
        user: user,
        token,
        message: "Successfull authenticated",
    }

    return res.status(200).json(responsePayload)

}

export { login }