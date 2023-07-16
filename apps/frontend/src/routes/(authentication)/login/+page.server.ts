import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    default: async ({ request, locals, cookies, url }) => {
        const redirectTo = url.searchParams.get('redirectTo')
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')

        const { service } = locals

        let success = false

        if (!username || !password) return fail(400, { error: "Missed required values!" })

        try {
            const data = await service.authentication.authWithPassword(username.toString(), password.toString())

            if ('error' in data) {
                throw new Error('Failed to auth. Cause: ' + data.error)
            }

            cookies.set('auth', data.token)
            success = true
        }
        catch (error) {
            return fail(400, {
                error: 'failed to auth'
            })
        }

        if (success) {
            throw redirect(302, redirectTo ?? '/')
        }
    }
}