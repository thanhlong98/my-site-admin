import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

const urn = process.env.GRAPHQL_URN

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'access-token': localStorage.getItem('access-token') || ''
  }
}))

const httpLink = new HttpLink({
  uri: `${window.location.protocol}//${urn}`
})

const wsLink = new WebSocketLink({
  uri: `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${urn}`,
  options: {
    reconnect: true,
    connectionParams: () => ({
      'access-token': window.localStorage.getItem('access-token') || ''
    })
  }
})

const linkSplit = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

const link = ApolloLink.from([linkSplit])

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
})

export default client
