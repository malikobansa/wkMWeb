import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_API, // Use environment variable for security
  cache: new InMemoryCache(),
});

export default client;
