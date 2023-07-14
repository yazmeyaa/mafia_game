const routes = {
    auth: {
        users: {
            login: '/auth/users/login',
            regsiter: '/auth/users/register',
        }
    }
} as const

export { routes }
