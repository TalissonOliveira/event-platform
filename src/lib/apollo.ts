import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oly3cp0cg101yw1mz0el8l/master',
  cache: new InMemoryCache()
})