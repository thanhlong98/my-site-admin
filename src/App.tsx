import { ApolloProvider } from '@apollo/client'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import { ProtectedRoute, PublicRoute, RestrictedRoute } from './components/Router'
import client from './config/graphql'
import { protectedRoutes, publicRoutes, restrictedRoutes } from './config/routers'
import { store } from './store'

// Lazy load - Code splitting
const lazyPages: Record<string, React.ComponentType<unknown>> = {}
Object.entries({ ...protectedRoutes, ...publicRoutes, ...restrictedRoutes }).forEach(
  ([key, route]) => {
    lazyPages[key] = React.lazy(() => import(`./features/${route.feature}`))
  }
)

const App: React.FC = () => {
  console.log('hello world')

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
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

              <Route path='*' component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ApolloProvider>
  )
}

export default App
