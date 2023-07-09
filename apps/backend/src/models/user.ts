import { sequelize } from '@modules/sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

interface UserAttributes {
    username: string;
    password: string;
    avatar?: string;
    email?: string;
}

export interface UserInstance extends Model<UserAttributes, UserAttributes>, UserAttributes { }

export const Users = sequelize.define<UserInstance>('Users', {
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
