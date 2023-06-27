import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    register: async ({ request, locals, cookies }) => {
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')

        const { pb } = locals

        if (!username || !password) return fail(400, { error: "Missed required values!" })

        try {
            await pb.collection('users').create({
                username,
                password,
                passwordConfirm: password
            })
            await pb.collection('users').authWithPassword(username.toString(), password.toString())
            const pb_cookie = pb.authStore.exportToCookie()
            cookies.set('pb_auth', pb_cookie)
            return {message: 'OK'}
        }
        catch (err) {
            console.log(err)
            return fail(400, { error: "failed to register" })
        }

    }
}