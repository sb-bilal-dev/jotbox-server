import { gql } from "apollo-server";

export const typeDefs = gql`
  type Todo {
    id: ID!
    description: String!
    completed: Boolean!
  }
  type Query {
    todos: [Todo]!
  }
`;
