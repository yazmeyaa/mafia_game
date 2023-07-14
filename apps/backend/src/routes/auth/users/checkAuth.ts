import { appConfig } from "@app/config";
import type { Request, Response } from "express";
import { JsonWebTokenError, verify } from 'jsonwebtoken'


async function checkAuth(req: Request<any, any>, res: Response) {
    const { auth } = req.cookies
    if (!auth || typeof auth !== 'string') {
        return res.status(400).send({
            error: "Missed auth cookie!"
        })
    }
    try {
        verify(auth, appConfig.jwtSecret)

        if (auth) return res.status(200).send()
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

export { checkAuth }