import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

export const PublicRouteWrapper: React.FC<RouteProps> = ({ children, ...restProps }) => (
  <Route {...restProps} render={() => children} />
)
