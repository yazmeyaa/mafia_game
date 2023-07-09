import { BackendService, BaseModel } from "index";

interface User extends BaseModel {
    username: string,
    avatar?: string
    email?: string
}

export class AuthStore {
    service: BackendService
    model: User | null
    constructor(service: BackendService) {
        this.service = service
        this.model = null
    }
}