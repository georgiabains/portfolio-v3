import { ApolloClient, InMemoryCache } from "@apollo/client"

export const apolloCon = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
})