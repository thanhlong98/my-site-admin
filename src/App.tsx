import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { Provider } from 'react-redux'
import client from './config/graphql'
import Routes from './routes'
import { store } from './store'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  )
}

export default App
