import { Users } from "@app/models/user";
import { hash } from "bcrypt";
import { Request, Response } from "express";

interface RequestBody {
    username?: string
    password?: string
}

async function register(req: Request<any, any, RequestBody>, res: Response) {
    const { password, username } = req.body

    if (!username || username.trim().length === 0) return res.status(400).json({
        error: "Missed usernmame field"
    })
    if (!password || password.trim().length === 0) return res.status(400).json({
        error: "Missing password field"
    })

    const isUserAvailable = await Users.findOne({ where: { username } })

    if (!!isUserAvailable) return res.status(400).json({
        error: "This username is already taken"
    })

    const bcryptedPassword = await hash(password, 10)

    await Users.create({
        username,
        password: bcryptedPassword
    })

    return res.status(200).json({
        message: "Successfull created new user!"
    })

}

export { register }
