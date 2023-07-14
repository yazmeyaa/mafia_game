import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    register: async ({ request, locals, cookies }) => {
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')

        const { service } = locals

        if (!username || !password) return fail(400, { error: "Missed required values!" })

        try {
            await service.authentication.registerWithPassword(username.toString(), password.toString())
            const data = await service.authentication.authWithPassword(username.toString(), password.toString())
            if (!data) throw new Error("Failed to register")
            cookies.set('auth', data.token)
            return { message: 'OK' }
        }
        catch (err) {
            console.log(err)
            return fail(400, { error: "failed to register" })
        }

    }
}