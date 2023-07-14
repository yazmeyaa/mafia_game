import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import type { Record } from 'pocketbase'

export const actions: Actions = {
    default: async ({ request, locals, cookies, url }) => {
        const redirectTo = url.searchParams.get('redirectTo')
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')

        const {  service } = locals

        let success = false

        if (!username || !password) return fail(400, { error: "Missed required values!" })

        try {
            const data = await service.authentication.authWithPassword(username.toString(), password.toString())
            success = true
        }
        catch (error) {
            console.log("::ERROR", error)
        }
      

        if (success) {
            throw redirect(302, redirectTo ?? '/')
        }
    }
}