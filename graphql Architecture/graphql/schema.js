export const schema = `#graphql
type User{
    name: String!
    username: String!
    phone: String!
}
type Query{
    user:[User]
}

`
