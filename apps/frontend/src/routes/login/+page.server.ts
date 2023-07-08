import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import type { Record } from 'pocketbase'

export const actions: Actions = {
    default: async ({ request, locals, cookies, url }) => {
        const redirectTo = url.searchParams.get('redirectTo')
        console.log(redirectTo)
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')

        const { pb } = locals

        let success = false

        if (!username || !password) return fail(400, { error: "Missed required values!" })

        try {
            await pb.collection('users').authWithPassword(username.toString(), password.toString())
            const pb_cookie = pb.authStore.exportToCookie()
            cookies.set('pb_auth', pb_cookie)
            success = true
        }
        catch (err) {
            console.log('ERROR: ', err)
            return fail(400, { error: "failed to auth" })
        }

        if(success) {
            locals.user = structuredClone(pb.authStore.model as Record)
            throw redirect(302, redirectTo ?? '/')
        }
    }
}