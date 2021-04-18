import { restrictedRouteList } from '@/routes/restricted.route'
import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export const ProtectedRouteWrapper: React.FC<RouteProps> = ({ children, ...restProps }) => {
  const isAuthenticated = useSelector<RootState>(state => state.auth.isAuthenticated)

  return (
    <Route
      {...restProps}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: restrictedRouteList.login.path,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
