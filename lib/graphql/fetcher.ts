import { DocumentNode, print } from 'graphql'

type GraphQLFetcherParams<TVariables = Record<string, unknown>> = {
  document: DocumentNode
  variables?: TVariables
  revalidate?: number
}

export async function fetchGraphQL<TData, TVariables = Record<string, unknown>>({
  document,
  variables = {} as TVariables,
  revalidate = 0
}: GraphQLFetcherParams<TVariables>) {
  try {
    const query = print(document)

    const response = await fetch(process.env.NEXT_PUBLIC_API_GRAPHQL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: revalidate }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const { data, errors } = await response.json()

    if (errors) {
      console.error('GraphQL Errors:', errors)
      throw new Error('GraphQL Error')
    }

    return data as TData
  } catch (error) {
    console.error('Error fetching from GraphQL:', error)
    throw error
  }
} 