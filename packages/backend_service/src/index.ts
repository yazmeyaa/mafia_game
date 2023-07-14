import { Authentication } from "./modules/Authentication"

class BackendService {
    baseUrl: string
    authentication: Authentication
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
        this.authentication = new Authentication(this)
    }
}

export { BackendService }
