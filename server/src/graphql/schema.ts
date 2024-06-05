export const schema = `#graphql
type User{
    _id: ID!
    fullName: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!

}
type Query {
    hello: String
    wow: String
    users:[User]
}
`