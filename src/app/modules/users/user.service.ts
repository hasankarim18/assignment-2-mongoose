import { TUser } from './user.interface'
import { User } from './user.model'

// query for creating a user in db
const createUserIntoDb = async function (userData: TUser) {
  const result = await User.create(userData)
  return result
}

// query to get all user form db
const getAllUserFromDb = async function () {
  const result = await User.aggregate([
    {
      $project: {
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
      },
    },
  ])
  return result
}

export const userServices = {
  createUserIntoDb,
  getAllUserFromDb,
}
