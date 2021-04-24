import { RestrictedRouteWrapper } from '@/components/RouterWrapper'
import { IRouteItem } from '@/interfaces'
import React from 'react'

type RestrictedRoute = 'login' | 'register'
/**
 * @description
 * Dinh nghia nhung route chi nhung nguoi chua dang nhap moi xem duoc
 *
 * Vi du: /login
 * Nếu đã đăng nhập thì sẽ chuyển hướng tới trang chủ /dashboard
 */

export const restrictedRouteList: IRouteItem[] = [
  {
    title: 'login',
    path: '/login',
    exact: true,
    page: 'Auth/Login'
  },
  {
    title: 'register',
    path: '/register',
    exact: true,
    page: 'Auth/Register'
  }
]

export const restrictedRoute = restrictedRouteList.map(route => {
  const C = React.lazy(() => import(`../pages/${route.page}`))

  return (
    <RestrictedRouteWrapper key={route.path} path={route.path} exact={route.exact}>
      <C />
    </RestrictedRouteWrapper>
  )
})
