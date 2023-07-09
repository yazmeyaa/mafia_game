export class BaseModel {
    updatedAt: string
    createdAt: string
    id: string

    constructor(obj: BaseModel & Record<string, string | number>) {
        Object.assign(this, obj)
        if ([obj.createdAt, obj.updatedAt, obj.id].some(item => !item || typeof item !== 'string')) {
            throw new Error('Not valid model!')
        }
        this.createdAt = obj.createdAt
        this.updatedAt = obj.updatedAt
        this.id = obj.id
    }
}