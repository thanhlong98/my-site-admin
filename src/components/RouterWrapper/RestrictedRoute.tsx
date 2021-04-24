import { masterRouteList } from '@/routes/master.route'
import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

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
              pathname: masterRouteList[0].path,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
