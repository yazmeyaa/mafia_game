import { sequelize } from '@modules/sequelize'
import { DataTypes, Model } from 'sequelize'

interface UserStatsAttributes {
    games: number
    wins: number
    loses: number
}

export interface UserStatsInstance extends Model<UserStatsAttributes, UserStatsAttributes>, UserStatsAttributes { }

const UserStats = sequelize.define<UserStatsInstance>('UserStats', {
    games: {
        type: DataTypes.INTEGER
    },
    wins: {
        type: DataTypes.INTEGER
    },
    loses: {
        type: DataTypes.INTEGER
    }
})

export { UserStats }
