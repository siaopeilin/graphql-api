import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const books = [
  {
    title: "タイトル1",
    author: "著者1"
  },
  {
    title: "タイトル2",
    author: "著者2"
  }
]

const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    test: [Book]
  }
`;

const resolvers = {
  Query: {
    test: () => books,
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);