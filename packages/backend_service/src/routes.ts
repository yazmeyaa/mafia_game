const routes = {
    auth: {
        users: {
            login: '/auth/users/login',
            regsiter: '/auth/users/register',
            refreshAuth: '/auth/users/refresh_auth',
            checkAuth: '/auth/users/checkAUth',
        }
    }
} as const

export { routes }
