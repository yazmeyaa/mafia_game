import { BaseAPIErrorResponse, BaseAPISuccessResponse, UserWithoutSecretFields } from "../";

export type UsersLoginSuccessResponse = BaseAPISuccessResponse & {
    user: UserWithoutSecretFields,
    token: string,
    message: string;
}

export type UsersLoginErrorResponse = BaseAPIErrorResponse