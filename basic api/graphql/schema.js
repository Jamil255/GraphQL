export const schema = `#graphql
type Todo{
    id:ID!
    userId:ID!
    title:String!
    completed:Boolean !
    users:User
}
type User {
    name:String!
    username:String!
    email:String!
    phone:String!
}

type Query{
todos:[Todo]
users:[User]
}

`
