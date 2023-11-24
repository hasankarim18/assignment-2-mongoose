import { Model } from 'mongoose'

export type TOrder = {
  productName: string
  price: number
  quantity: number
}

export type TUser = {
  userId: number
  username: string
  password: string
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: {
    street: string
    city: string
    country: string
  }
  orders: TOrder[]
  isDeleted: boolean
}

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TUser | null>
  // eslint-disable-next-line no-unused-vars
  isDeleted(id: string): Promise<TUser | null>
}
