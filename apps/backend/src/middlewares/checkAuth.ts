import { appConfig } from "@app/config";
import { Users } from "@app/models/user";
import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError, verify } from "jsonwebtoken";

async function checkAuth(req: Request, res: Response, next: NextFunction) {
    const { auth } = req.cookies
    if (!auth || typeof auth !== 'string') return res.status(401).json({
        error: "Missed auth cookie"
    })

    try {
        const { username } = verify(auth, appConfig.jwtSecret) as { username: string }
        const user = await Users.findOne({ where: { username } })

        res.locals.user = user
        next()
    }
    catch (err) {
        if (err instanceof JsonWebTokenError) {
            res.status(401).send({
                error: err.message
            })
        }
        res.status(401).send({
            error: "something went wrong"
        })
    }
}

export { checkAuth }
