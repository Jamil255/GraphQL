import { ApolloServer } from '@apollo/server'
import { schema } from './graphql/schema.js'
import { startStandaloneServer } from '@apollo/server/standalone'

const port = process.env.PORT || 3000
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      user: () => 'localhost',
    },
  },
})

startStandaloneServer(server, {
  listen: {
    port,
  },
})
  .then(() => {
    console.log('server is  on port ' + port + 'in')
  })
  .catch((error) => {
    console.log(error)
  })
