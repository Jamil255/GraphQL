import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { schema } from './graphql/schema.js'
import connectDb from './database/db.js'
import { getAllUsers } from './controllers/user.js'
import { getAllTodos } from './controllers/todo.js'
import { getImageById } from './controllers/getImageById.js'
import userModel from './models/userSchema.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { login } from './controllers/login.js'

dotenv.config({ path: './.env' })
export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT'
const port = Number(process.env.PORT) || 3000
const MongUri = process.env.MONGO_URI || ''
if (!MongUri) {
  throw new Error(' MongUri is  undefinded')
}
connectDb(MongUri)
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Mutation: {
      newUser: async (parent: any, { fullName, password, email }) => {
        try {
          const hashPass = await bcrypt.hash(password, 12)

          const userRes = await userModel.create({
            fullName,
            password: hashPass,
            email,
          })
          return userRes
        } catch (error) {
          console.log(error)
        }
      },
      login: async (_: any, { email, password }) => {
        try {
          const user = await userModel.findOne({ email })
          if (!user) {
            throw new Error('eamil and passwor incorrect')
          }
          const hashPass = await bcrypt.compare(password, user?.password)
          if (!hashPass) {
            throw new Error('eamil and passwor incorrect')
          }
          var token: any = jwt.sign(
            {
              email: user.email,
              fullName: user.fullName,
              token,
            },
            'jamiljdjdjd'
          )
          return token
        } catch (error) {
          console.log(error)
        }
      },
    },
    Query: {
      users: getAllUsers,
      todos: getAllTodos,
      img: getImageById,
    },
  },
})

startStandaloneServer(server, {
  listen: {
    port,
  },
})
  .then(() => {
    console.log('server is  on port ' + port + 'in' + envMode)
  })
  .catch((error) => {})

//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev'))

//   app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });

//   // your routes here

//   app.get("*", (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Page not found'
//     });
//   });

//   app.use(errorMiddleware);

//   app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));started
