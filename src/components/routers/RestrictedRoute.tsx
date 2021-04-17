import { protectedRoutes } from '@/config/router'
import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

// A wrapper for <Route> that redirects to the dashboard
// screen if you're already authenticated.
export const RestrictedRoute: React.FC<RouteProps> = ({ children, ...restProps }) => {
  const isAuthenticated = useSelector<RootState>(state => state.auth.isAuthenticated)

  return (
    <Route
      {...restProps}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: protectedRoutes.dashboard.path,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
