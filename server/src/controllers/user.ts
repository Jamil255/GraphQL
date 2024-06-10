import userModel from '../models/userSchema.js'

export const getAllUsers = async () => {
  try {
    const result = await userModel.find()
    consolle.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}
