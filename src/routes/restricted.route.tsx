import { RestrictedRouteWrapper } from '@/components/RouterWrapper'
import { IRoute } from '@/interfaces'
import React from 'react'

type RestrictedRoute = 'login' | 'register'
/**
 * @description
 * Dinh nghia nhung route chi nhung nguoi chua dang nhap moi xem duoc
 *
 * Vi du: /login
 * Nếu đã đăng nhập thì sẽ chuyển hướng tới trang chủ /dashboard
 */
export const restrictedRouteList: Readonly<Record<RestrictedRoute, IRoute>> = {
  login: {
    feature: 'Auth/pages/Login',
    path: '/login',
    exact: false
  },
  register: {
    feature: 'Auth/pages/Register',
    path: '/register',
    exact: false
  }
}

export const restrictedRoute = Object.entries(restrictedRouteList).map(([key, route]) => {
  const C = React.lazy(() => import(`../features/${route.feature}`))

  return (
    <RestrictedRouteWrapper key={key} path={route.path} exact={route.exact}>
      <C />
    </RestrictedRouteWrapper>
  )
})
