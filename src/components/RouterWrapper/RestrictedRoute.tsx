import { protectedRouteList } from '@/routes/protected.route'
import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

// A wrapper for <Route> that redirects to the dashboard
// screen if you're already authenticated.
export const RestrictedRouteWrapper: React.FC<RouteProps> = ({ children, ...restProps }) => {
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
              pathname: protectedRouteList.dashboard.path,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
