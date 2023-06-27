import { loadTranslations } from '$lib/i18n';
import type { LayoutLoad } from './$types'

export const load = (async ({ url, data }) => {
    const { pathname } = url;
    const { lang, user } = data
    let defaultLocale = lang ?? 'ru'


    const initLocale = defaultLocale;

    await loadTranslations(initLocale, pathname);

    console.log('::LAYOUT USER: ', user)

    return { user };
}) satisfies LayoutLoad;