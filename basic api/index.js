import { ApolloServer } from '@apollo/server'
import { schema } from './graphql/schema.js'
import { startStandaloneServer } from '@apollo/server/standalone'
import { getAllTodo, getAllTodoUsers, todoName } from './controllers/todo.js'

const port = process.env.PORT || 3000
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Todo: {
      users: todoName,
    },
    Query: {
      todos: getAllTodo,
      users: getAllTodoUsers,
    },
  },
})

startStandaloneServer(server, {
  listen: {
    port,
  },
})
  .then(() => {
    console.log('server is  on port ' + port)
  })
  .catch((error) => {
    console.log(error)
  })
