export const schema = `

type User{
_id:ID!
userID:String!
value:String!

}

type Query{
user:[User]
}

`
