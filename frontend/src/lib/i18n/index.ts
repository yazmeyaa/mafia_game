import i18n from 'sveltekit-i18n'
import type { Config } from 'sveltekit-i18n'
import lang from './lang.json'
import { browser } from '$app/environment'

export const config: Config = {
    translations: {
        en: { lang },
        ru: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'login',
            routes: ['/login'],
            loader: async () => (await import('./locales/en/login.json')).default
        },
        {
            locale: 'ru',
            key: 'login',
            routes: ['/login'],
            loader: async () => (await import('./locales/ru/login.json')).default
        },
    ]
}

export const { t, loading, locales, locale, loadTranslations } = new i18n(config)
locale.subscribe((value) => {
    if (browser) {
        const now = new Date()
        const time = now.getTime()
        const expireTime = time + (1000 * 60 * 60 * 24 * 365)
        now.setTime(expireTime)
        console.log(now)
        document.cookie = `lang=${value};expires=${now.toUTCString()}`
    }
})
loading.subscribe(($loading) => $loading && console.log('Loading translations...'));