import { appConfig } from "@app/config";
import { sign } from "jsonwebtoken";

export function createToken(username: string) {
    const { jwtSecret } = appConfig
    return sign({username}, jwtSecret, {
        expiresIn: '1d'
    })
}