/** Important keys to use Redis */
const requiredKeys = ['host', 'port', 'password', 'database'] as const

type RequiredFieldsType = typeof requiredKeys[number]

type RedisConfigType = Record<RequiredFieldsType, string | number>


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
        if (!value) throw new Error(`Missed environment variable: ${envKey}`)
        obj[key] = value
    })

    return obj
}

export { getRedisConfig }
