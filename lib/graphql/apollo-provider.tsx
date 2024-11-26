'use client';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';
import { useAuth } from '../auth-context';

export default function ApolloClientProvider({ children }: PropsWithChildren) {
  const { accessToken, authToken } = useAuth();

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
    cache: new InMemoryCache(),
    headers: {
      accessToken: accessToken || '',
      authorization: authToken || ''
    }
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
} 