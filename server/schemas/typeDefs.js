const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount:Int
    savedBooks: []
}

type Book {
    bookId: ID 
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}

`;

module.exports = typeDefs;

