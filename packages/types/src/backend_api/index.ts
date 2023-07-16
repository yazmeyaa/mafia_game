import { User } from "../user"

export type UserWithoutSecretFields = Omit<User, 'password'>

export interface BaseAPISuccessResponse {
    message: string
}

export interface BaseAPIErrorResponse {
    error: string
}


export * from './auth'