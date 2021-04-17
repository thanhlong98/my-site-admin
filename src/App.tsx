import { ApolloProvider } from '@apollo/client'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Loading from './components/loading'
import { ProtectedRoute, PublicRoute, RestrictedRoute } from './components/routers'
import client from './config/graphql'
import { protectedRoutes, publicRoutes, restrictedRoutes } from './config/router'
import { store } from './store'

const lazyPages: Record<string, React.ComponentType<unknown>> = {}
Object.entries({ ...protectedRoutes, ...publicRoutes, ...restrictedRoutes }).forEach(
  ([key, route]) => {
    lazyPages[key] = React.lazy(() => import(`./pages/${route.page}`))
  }
)

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Switch>
              {Object.entries(protectedRoutes).map(([key, route]) => {
                const C = lazyPages[key]
                return (
                  <ProtectedRoute key={key} path={route.path}>
                    <C />
                  </ProtectedRoute>
                )
              })}
              {Object.entries(restrictedRoutes).map(([key, route]) => {
                const C = lazyPages[key]
                return (
                  <RestrictedRoute key={key} path={route.path}>
                    <C />
                  </RestrictedRoute>
                )
              })}
              {Object.entries(publicRoutes).map(([key, route]) => {
                const C = lazyPages[key]
                return (
                  <PublicRoute key={key} path={route.path}>
                    <C />
                  </PublicRoute>
                )
              })}
              <Redirect to='/login' />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  )
}

export default App
