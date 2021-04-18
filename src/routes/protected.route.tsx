import { ProtectedRouteWrapper } from '@/components/RouterWrapper'
import { IRoute } from '@/interfaces'
import React from 'react'

export type ProtectedRoute = 'dashboard' | 'interview'

/**
 * @description
 * Dinh nghia nhung route chi danh cho nhung nguoi da nhap thi moi duoc truy cap
 * Vi du: setting
 * Nếu chưa đăng nhập sẽ bị đẩy về trang /login
 */
export const protectedRouteList: Readonly<Record<ProtectedRoute, IRoute>> = {
  dashboard: {
    feature: 'Intro/pages/Dashboard',
    path: '/dashboard',
    exact: false
  },
  interview: {
    feature: 'Interview',
    path: '/interview',
    exact: false
  }
}

export const protectedRoute = Object.entries(protectedRouteList).map(([key, route]) => {
  const C = React.lazy(() => import(`../features/${route.feature}`))

  return (
    <ProtectedRouteWrapper key={key} path={route.path} exact={route.exact}>
      <C />
    </ProtectedRouteWrapper>
  )
})
