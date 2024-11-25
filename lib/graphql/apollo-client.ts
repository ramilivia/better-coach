import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
  },
); 