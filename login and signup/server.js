import { makeExecutableSchema } from '@graphql-tools/schema'
import express from 'express'
import resolvers from './resolvers.js'
import typeDefs from './schema.js'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors('*'))

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
app.listen(PORT, () => console.log(`listening on ${PORT}`))
