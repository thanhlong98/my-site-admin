import { ProtectedRouteWrapper } from '@/components/RouterWrapper'
import { IRoute } from '@/interfaces'
import React from 'react'

export type ProtectedRoute = 'dashboard' | 'interview' | 'setting'

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
    exact: true
  },
  interview: {
    feature: 'Interview',
    path: '/interview',
    exact: false
  },
  setting: {
    feature: 'Setting/pages/App',
    path: '/setting',
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
