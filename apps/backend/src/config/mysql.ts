/** Important keys to use MySQL database */
const requiredKeys = ['port', 'url', 'user', 'password', 'database'] as const

type RequiredFieldsType = typeof requiredKeys[number]

export type MySQLConfigType = Record<RequiredFieldsType, string>


/**
 * Retrieves MySQL configuration from environment variables.
 * @returns {MySQLConfigType} Object containing MySQL configuration.
 * @throws {Error} If any of the required fields are missing in the environment variables.
 */
function getMySQLConfig(): MySQLConfigType {
    const obj: MySQLConfigType = {} as MySQLConfigType // It should be filled by next actions

    requiredKeys.forEach(key => {
        const envKey = `MYSQL_${key.toUpperCase()}`
        const value = process.env[envKey]
        if (!value) throw new Error(`Missed environment variable: ${envKey}`)
        obj[key] = value
    })

    return obj
}

export { getMySQLConfig }
