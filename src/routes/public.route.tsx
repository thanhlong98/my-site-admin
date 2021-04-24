import { PublicRouteWrapper } from '@/components/RouterWrapper'
import { IRouteItem } from '@/interfaces'
import React from 'react'

/**
 * @description
 * Ding nghia nhung route cho ca nhung nguoi chua dang nhap va nhung nguoi da
 * dang nhap co the xem duoc
 */
export const publicRouteList: IRouteItem[] = [
  {
    title: 'home',
    path: '/',
    exact: true,
    page: 'Home',
  },
]

export const publicRoute = publicRouteList.map((route) => {
  const C = React.lazy(() => import(`../pages/${route.page}`))

  return (
    <PublicRouteWrapper key={route.path} path={route.path} exact={route.exact}>
      <C />
    </PublicRouteWrapper>
  )
})
