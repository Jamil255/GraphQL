import { ApolloServer } from '@apollo/server'
import { schema } from './graphql/schema.js'
import { startStandaloneServer } from '@apollo/server/standalone'
import { graphql } from 'graphql'
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
  .then(() => console.log('Starting Apollo Server'))
    .catch(() => console.log('Failed to start Apollo Server'))
  

// graphql Arct
    
// query:data fetch from backend to client
// mutation:post  data from client to server
// schema:graphql design schema to check for every query ||when fetch data to tell the schema in gql

// resolvers: query and mutation held self resolvers for each query||bussiness logic in gql||simple js functions
