import { BackendService } from "index";
import { routes } from "../routes";
import { User } from 'types'

export class Authentication {
    service: BackendService
    baseHeaders = new Headers({
        'Content-Type': "application/json",
        accept: "application/json"
    })
    constructor(service: BackendService) {
        this.service = service
    }

    async authWithPassword(username: string, password: string): Promise<User & { token: string } | null> {
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

            const data = await response.json() as User & { token: string }
            if (response.status >= 400) throw new Error("Failed to auth!")
            return data
        }
        catch (err) {
            console.log(err)
            return null
        }

    }

    async registerWithPassword(username: string, password: string): Promise<{ message: string } | null> {
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

            const data = await response.json()
            return data
        }
        catch (err) {
            console.log(err)
            return null
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

    async refreshAuth(token: string): Promise<{ user: User, token: string, message: string } | null> {
        const url = this.service.baseUrl + routes.auth.users.refreshAuth
        const headers = this.baseHeaders
        headers.set('auth', token)

        try {
            const response = await fetch(url, {
                method: "GET",
                headers,
                credentials: "include",
            })

            const data = await response.json() as { user: User, token: string, message: string }

            if (response.status >= 400) {
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
            return null
        }
    }

}