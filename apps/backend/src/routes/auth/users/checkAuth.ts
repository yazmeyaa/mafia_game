import { appConfig } from "@app/config";
import type { Request, Response } from "express";
import { JsonWebTokenError, verify } from 'jsonwebtoken'
import { UsersCheckAuthErrorResponse, UsersCheckAuthSuccessResponse } from 'types'

type ResponseBodyType = UsersCheckAuthErrorResponse | UsersCheckAuthSuccessResponse

async function checkAuth(req: Request, res: Response<ResponseBodyType>) {
    const { auth } = req.cookies
    if (!auth || typeof auth !== 'string') {
        return res.status(400).send({
            error: "Missed auth cookie!"
        })
    }
    try {
        verify(auth, appConfig.jwtSecret)
        return res.status(200).json({
            message: 'OK'
        })

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