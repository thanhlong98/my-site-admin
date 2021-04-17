import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { restrictedRoutes } from '@/config/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export const ProtectedRoute: React.FC<RouteProps> = ({ children, ...restProps }) => {
  const isAuthenticated = useSelector<RootState>(state => state.auth.isAuthenticated)

  console.log(isAuthenticated)

  return (
    <Route
      {...restProps}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: restrictedRoutes.login.path,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
