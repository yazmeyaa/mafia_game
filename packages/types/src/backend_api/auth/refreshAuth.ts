import { BaseAPIErrorResponse, BaseAPISuccessResponse, UserWithoutSecretFields } from "..";

export type UsersRefreshAuthSuccessResponse = BaseAPISuccessResponse & {
    user: UserWithoutSecretFields
    token: string
}

export type UsersRefreshAuthErrorResponse = BaseAPIErrorResponse
