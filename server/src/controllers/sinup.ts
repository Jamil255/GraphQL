// import bcrypt from 'bcrypt';
// import userModel from '../models/userSchema.js';

// export signUp = async (parent: any, { fullName, password, email }) =? {
//     try {
//       const hashPass = await bcrypt.hash(password, 12)

//       const userRes = await userModel.create({
//         fullName,
//         password: hashPass,
//         email,
//       })
//       return userRes
//     } catch (error) {
//       console.log(error)
//     }
//   }