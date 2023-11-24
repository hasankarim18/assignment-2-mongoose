import { Schema, model } from 'mongoose'
import { TOrder, TUser, UserModel } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const orderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const userSchema = new Schema<TUser, UserModel>({
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

// for creating static model
userSchema.statics.isUserExists = async function (id) {
  const existingUser = await User.findOne({ userId: id })
  return existingUser
}

userSchema.statics.isDeleted = async function (id) {
  const data = await User.findOne({ userId: id })
  if (data?.isDeleted) {
    return true
  } else {
    return false
  }
}

export const User = model<TUser, UserModel>('User', userSchema)
