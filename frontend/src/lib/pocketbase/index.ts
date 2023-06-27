import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import Pocketbase, { LocalAuthStore } from 'pocketbase'

export class CustomPocketbase extends Pocketbase {
    constructor(baseUrl: string, authStore: LocalAuthStore, lang?: string) {
        super(baseUrl, authStore, lang)
    }
}

const pb = new CustomPocketbase(PUBLIC_POCKETBASE_URL, new LocalAuthStore('pb_auth'))

export { pb }