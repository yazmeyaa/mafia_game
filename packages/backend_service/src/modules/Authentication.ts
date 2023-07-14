import { BackendService } from "index";
import { routes } from "routes";

export class Authentication {
    service: BackendService
    baseHeaders = new Headers({
        'Content-Type': "application/json"
    })
    constructor(service: BackendService) {
        this.service = service
    }

    async authWithLoginAndPassword(username: string, password: string) {
        const url = this.service.baseUrl + routes.auth.users
        const bodyPayload = { username, password }
        const body = JSON.stringify(bodyPayload)

        const 

    }


    registerWithUserNameAndPassword(username: string, password: string) {

    }

}