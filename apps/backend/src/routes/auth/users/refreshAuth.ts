import { appConfig } from "@app/config";
import { Users } from "@app/models/user";
import { createToken } from "@app/utils/jwt";
import type { Request, Response } from "express";
import { JsonWebTokenError, verify } from 'jsonwebtoken'
import { User } from "types";


async function refreshAuth(req: Request<any, any>, res: Response) {
    const { auth } = req.headers
    if (!auth || typeof auth !== 'string') {
        return res.status(400).send({
            error: "Missed auth cookie!"
        })
    }
    try {
        const { username } = verify(auth, appConfig.jwtSecret) as { username: string }

        const user = await Users.findOne({ where: { username } }) as Partial<User>

        if (!user) return res.status(400).json({
            error: "Something went wrong"
        })

        const token = createToken(username)

        user.password = undefined

        res.cookie('auth', token)
        if (auth) return res.status(200).send({
            user: user as Partial<User>,
            token,
            message: "Success"
        })

        else return res.status(401).send()

    }
    catch (error) {
        if (error instanceof JsonWebTokenError) {
            return res.status(400).json({
                error: error.message
            })
        }
        return res.status(400).json({
            error: "Something went wrong"
        })
    }
}

export { refreshAuth }