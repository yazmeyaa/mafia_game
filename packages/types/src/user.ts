import type { Model } from 'sequelize'

export interface User {
    username: string;
    password: string;
    avatar?: string;
    email?: string;
}

export interface UserInstance extends Model<User, User>, User { }