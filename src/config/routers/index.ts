interface IRoute {
  feature: string
  path: string
  exact?: boolean
}

type RestrictedRoute = 'login' | 'register'
/**
 * @description
 * Dinh nghia nhung route chi nhung nguoi chua dang nhap moi xem duoc
 *
 * Vi du: /login
 * Nếu đã đăng nhập thì sẽ chuyển hướng tới trang chủ /dashboard
 */
export const restrictedRoutes: Readonly<Record<RestrictedRoute, IRoute>> = {
  login: {
    feature: 'Auth/pages/Login',
    exact: true,
    path: '/login'
  },
  register: {
    feature: 'Auth/pages/Register',
    exact: true,
    path: '/register'
  }
}

type PublicRoute = 'home'

/**
 * @description
 * Ding nghia nhung route cho ca nhung nguoi chua dang nhap va nhung nguoi da
 * dang nhap co the xem duoc
 */
export const publicRoutes: Readonly<Record<PublicRoute, IRoute>> = {
  home: {
    feature: 'Intro/pages/Home',
    path: '/',
    exact: true
  }
}

export type ProtectedRoute = 'dashboard' | 'interview'

/**
 * @description
 * Dinh nghia nhung route chi danh cho nhung nguoi da nhap thi moi duoc truy cap
 * Vi du: setting
 * Nếu chưa đăng nhập sẽ bị đẩy về trang /login
 */
export const protectedRoutes: Readonly<Record<ProtectedRoute, IRoute>> = {
  dashboard: {
    feature: 'Intro/pages/Dashboard',
    path: '/dashboard',
    exact: true
  },
  interview: {
    feature: 'Interview',
    path: '/interview',
    exact: true
  }
}
