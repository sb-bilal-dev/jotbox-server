import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    todos: () => [
      {
        id: "1",
        description: "Go to the Store",
        completed: false,
      },
      {
        id: "2",
        description: "Clean the House",
        completed: false,
      },
      {
        id: "3",
        description: "Meditate",
        completed: true,
      },
    ],
  },
};
