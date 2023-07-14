/** Important keys to use Redis */
const requiredKeys = ['host', 'port', 'password', 'database'] as const

const defaultValues: Record<typeof requiredKeys[number], string> = {
    database: '0',
    host: '127.0.0.1',
    password: '',
    port: '6379'
} as const

type RequiredFieldsType = typeof requiredKeys[number]

export type RedisConfigType = Record<RequiredFieldsType, string>


/**
 * Retrieves Redis configuration from environment variables.
 * @returns {RedisConfigType} Object containing Redis configuration.
 * @throws {Error} If any of the required fields are missing in the environment variables.
 */
function getRedisConfig(): RedisConfigType {
    const obj: RedisConfigType = {} as RedisConfigType //* It should be filled by next actions

    requiredKeys.forEach(key => {
        const envKey = `REDIS_${key.toUpperCase()}`
        const value = process.env[envKey]
        obj[key] = value ?? defaultValues[key]
    })

    return obj
}

export { getRedisConfig }
