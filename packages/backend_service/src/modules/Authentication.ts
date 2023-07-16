import { BackendService } from "index";
import { routes } from "../routes";
import type {
    UsersLoginErrorResponse,
    UsersLoginSuccessResponse,
    UsersRefreshAuthErrorResponse,
    UsersRefreshAuthSuccessResponse,
    UsersRegisterErrorResponse,
    UsersRegisterSuccessResponse
} from 'types'

export class Authentication {
    service: BackendService
    baseHeaders = new Headers({
        'Content-Type': "application/json",
        accept: "application/json"
    })
    constructor(service: BackendService) {
        this.service = service
    }

    async authWithPassword(username: string, password: string): Promise<UsersLoginSuccessResponse | UsersLoginErrorResponse> {
        const url = this.service.baseUrl + routes.auth.users.login
        const bodyPayload = { username, password }
        const body = JSON.stringify(bodyPayload)

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: this.baseHeaders,
                credentials: "include",
                body
            })

            if (response.status >= 400) {
                const errorData = await response.json() as UsersLoginErrorResponse
                return errorData
            }
            const data = await response.json() as UsersLoginSuccessResponse

            return data
        }
        catch (err) {
            return {
                error: "Failed to auth"
            }
        }

    }

    async registerWithPassword(username: string, password: string): Promise<UsersRegisterSuccessResponse | UsersRegisterErrorResponse> {
        const url = this.service.baseUrl + routes.auth.users.regsiter
        const bodyPayload = { username, password }
        const body = JSON.stringify(bodyPayload)

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: this.baseHeaders,
                credentials: "include",
                body
            })

            const data = await response.json() as UsersRegisterSuccessResponse | UsersRegisterErrorResponse
            return data
        }
        catch (err) {
            return {
                error: "Failed to auth."
            }
        }
    }

    async checkAuth(): Promise<boolean> {
        const url = this.service.baseUrl + routes.auth.users.checkAuth
        try {
            await fetch(url, {
                method: "POST",
                headers: this.baseHeaders,
                credentials: "include",
            })

            return true
        }
        catch (err) {
            console.log(err)
            return false
        }
    }

    async refreshAuth(token: string): Promise<UsersRefreshAuthSuccessResponse | UsersRefreshAuthErrorResponse> {
        const url = this.service.baseUrl + routes.auth.users.refreshAuth
        const headers = this.baseHeaders
        headers.set('auth', token)

        try {
            const response = await fetch(url, {
                method: "GET",
                headers,
                credentials: "include",
            })

            const data = await response.json() as UsersRefreshAuthSuccessResponse

            if (response.status >= 400 || 'error' in data) {
                throw new Error("Failed to refresh auth")
            }

            return data

        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            } else {
                console.log(error)
            }
            return {
                error: "Failed to refresh auth"
            }
        }
    }

}