import { Schema, model } from 'mongoose'
import { TOrder, TUser } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const orderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String },
    lastName: { type: String },
  },
  age: { type: Number },
  email: { type: String, unique: true },
  hobbies: { type: [String] },
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  orders: { type: [orderSchema], default: undefined },
  isDeleted: { type: Boolean },
})

/** schema pre  */

// hassing the password when saved
userSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrpt_salt_rounds),
  )
  user.isDeleted = false
})

// doing post operation on save to delete the password
userSchema.post('save', function (doc, next) {
  doc.password = ''

  next()
})

export const User = model<TUser>('User', userSchema)
