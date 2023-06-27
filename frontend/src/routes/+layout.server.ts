import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const { lang, user } = locals || {}

    console.log("LAYOUT_SERVER USER: ", user)

    return {
        lang,
        user
    }
}) satisfies LayoutServerLoad