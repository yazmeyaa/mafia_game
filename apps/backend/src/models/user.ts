import { sequelize } from '@modules/sequelize'
import { DataTypes } from 'sequelize'
import { UserStats } from './stats';
import { UserInstance } from 'types'

const Users = sequelize.define<UserInstance>('Users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
})

Users.hasOne(UserStats)

export { Users }
