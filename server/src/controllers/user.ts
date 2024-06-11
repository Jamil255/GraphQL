import userModel from '../models/userSchema.js'

export const getAllUsers = async () => {
  try {
    const result = await userModel.find()
<<<<<<< HEAD

=======
    consolle.log(result)
>>>>>>> 858ce13cd211da7c00b89cd69ca13a747d8b4fdd
    return result
  } catch (error) {
    console.log(error)
  }
}
