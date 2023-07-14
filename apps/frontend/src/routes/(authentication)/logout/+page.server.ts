import { redirect } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
    cookies.set('pb_auth', '', {
        expires: new Date(0)
    })
    throw redirect(301, '/')
}

export const actions: Actions = {
    default({ cookies }) {
        cookies.set('pb_auth', '', {
            path: '/',
            expires: new Date(0),
        })

        throw redirect(302, '/login')
    },
}
