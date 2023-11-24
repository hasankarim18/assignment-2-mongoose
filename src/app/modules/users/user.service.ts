import { TUser } from './user.interface'
import { Student } from './user.model'

const createUserIntoDb = async function (userData: TUser) {
  const result = await Student.create(userData)
  return result
}

export const userServices = {
  createUserIntoDb,
}
