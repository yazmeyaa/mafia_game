import { AuthStore } from 'modules/authStore'
import {BaseModel} from 'modules/baseModel'

class BackendService {
    baseUrl: string
    authStore: AuthStore
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
        this.authStore = new AuthStore(this)
    }
}

export { BackendService, BaseModel, AuthStore }
