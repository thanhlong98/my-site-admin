interface IRoute {
  page: string
  exact?: boolean
  path: string
}

type RestrictedRoute = 'login'
/**
 * @description
 * Dinh nghia nhung route chi nhung nguoi chua dang nhap moi xem duoc
 *
 * Vi du: /login
 * Nếu đã đăng nhập thì sẽ chuyển hướng tới trang chủ /dashboard
 */
export const restrictedRoutes: Readonly<Record<RestrictedRoute, IRoute>> = {
  login: {
    page: 'Login',
    exact: true,
    path: '/login'
  }
}

type PublicRoute = string

/**
 * @description
 * Ding nghia nhung route cho ca nhung nguoi chua dang nhap va nhung nguoi da
 * dang nhap co the xem duoc
 */
export const publicRoutes: Readonly<Record<PublicRoute, IRoute>> = {}

export type ProtectedRoute = 'dashboard' | 'interview'

/**
 * @description
 * Dinh nghia nhung route chi danh cho nhung nguoi da nhap thi moi duoc truy cap
 * Vi du: setting
 * Nếu chưa đăng nhập sẽ bị đẩy về trang /login
 */
export const protectedRoutes: Readonly<Record<ProtectedRoute, IRoute>> = {
  dashboard: {
    page: 'Dashboard',
    path: '/dashboard',
    exact: true
  },
  interview: {
    page: 'Interview',
    path: '/interview',
    exact: true
  }
}
