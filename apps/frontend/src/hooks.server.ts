import { service } from '$lib/service/backendService'
// import type { Record } from 'pocketbase'

export async function handle({ event, resolve }) {
    const lang = event.cookies.get('lang') ?? 'ru'
    event.locals.lang = lang

    const auth_token = event.cookies.get('auth') ?? ''
    event.locals.service = service

    try {
            const data = await event.locals.service.authentication.refreshAuth(auth_token)
            console.log("::DATA: ", data)
            // @ts-ignore
            // event.locals.user = structuredClone(data)
    }
    catch (error) {
        console.log("::ERROR: ", error)
        event.locals.user = undefined
    }

    const response = await resolve(event);

    // response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
    return response;
}