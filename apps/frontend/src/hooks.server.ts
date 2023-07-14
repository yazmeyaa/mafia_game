import { service } from '$lib/service/backendService'
import { serialize } from 'cookie'

export async function handle({ event, resolve }) {
    const lang = event.cookies.get('lang') ?? 'ru'
    event.locals.lang = lang

    const auth_token = event.cookies.get('auth') ?? ''
    event.locals.service = service

    let tokenToSet: null | string = null


    try {
        const data = await event.locals.service.authentication.refreshAuth(auth_token)
        console.log("::DATA: ", data)
        if (!data) throw new Error('Failed to auth');
        event.locals.user = data.user
        tokenToSet = data.token
    }
    catch (error) {
        console.log("::ERROR: ", error)
        event.locals.user = undefined
    }

    const response = await resolve(event);
    if (tokenToSet) response.headers.set('set-cookie', serialize('auth', tokenToSet))
    return response;
}