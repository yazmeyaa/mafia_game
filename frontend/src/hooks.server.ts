import { pb } from '$lib/pocketbase'
import type { Record } from 'pocketbase'

export async function handle({ event, resolve }) {
    const lang = event.cookies.get('lang') ?? 'ru'
    event.locals.lang = lang

    const auth_token = event.cookies.get('pb_auth') ?? ''
    const tokenSerialized = event.cookies.serialize('pb_auth', auth_token)
    event.locals.pb = pb
    event.locals.pb.authStore.loadFromCookie(tokenSerialized)


    try {
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection('users').authRefresh(undefined, {
                $autoCancel: false
            })
            event.locals.user = structuredClone(event.locals.pb.authStore.model) as Record
        }
    }
    catch (error) {
        event.locals.pb.authStore.clear();
        event.locals.user = undefined
    }

    const response = await resolve(event);

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
    return response;
}