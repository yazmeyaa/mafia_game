import { redirect } from '@sveltejs/kit'

export const load = async ({ parent, url }) => {
    const { user } = await parent()
    const params = new URLSearchParams({
        redirectTo: url.pathname
    })
    if(!user) throw redirect(302, `/login?${params.toString()}`)

    return {}
}