import { IRoute } from '@/interfaces'
import React from 'react'
import { PublicRouteWrapper } from '@/components/RouterWrapper'

type PublicRoute = 'home'

/**
 * @description
 * Ding nghia nhung route cho ca nhung nguoi chua dang nhap va nhung nguoi da
 * dang nhap co the xem duoc
 */
export const publicRouteList: Readonly<Record<PublicRoute, IRoute>> = {
  home: {
    feature: 'Intro/pages/Home',
    path: '/',
    exact: true
  }
}

export const publicRoute = Object.entries(publicRouteList).map(([key, route]) => {
  const C = React.lazy(() => import(`../features/${route.feature}`))

  return (
    <PublicRouteWrapper key={key} path={route.path} exact={route.exact}>
      <C />
    </PublicRouteWrapper>
  )
})
