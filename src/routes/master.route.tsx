import { ProtectedRouteWrapper } from '@/components/RouterWrapper'
import { IRouteItem } from '@/interfaces'
import {
  CommentOutlined,
  DashboardOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import React, { ReactNode } from 'react'

export const masterRouteList: IRouteItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    page: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    title: 'Interview',
    path: '/interview',
    page: 'Interview',
    icon: <CommentOutlined />,
    exact: true,
  },
  {
    title: 'Create Interview Question',
    path: '/interview/question/create',
    page: 'Interview/QuestionCreate',
    isCreate: true,
  },
  {
    title: 'Edit Interview Question',
    path: '/interview/question/:questionId',
    page: 'Interview/QuestionEdit',
    isCreate: true,
  },
  {
    title: 'User',
    path: '_user-group',
    page: '_',
    icon: <UserOutlined />,
    children: [
      {
        title: 'User',
        path: '/users',
        page: 'User/UserList',
        exact: true,
      },
      {
        title: 'create-user',
        path: '/user/create',
        page: 'User/UserCreate',
        isCreate: true,
      },
      {
        title: 'edit-user',
        path: '/user/:userId',
        page: 'User/UserEdit',
      },
      {
        title: 'Role',
        path: '/roles',
        page: 'Role/RoleList',
        exact: true,
      },
      {
        title: 'create-role ',
        path: '/role/create',
        page: 'Role/RoleCreate',
        isCreate: true,
      },
      {
        title: 'edit-role',
        path: '/role/:roleId',
        page: 'Role/RoleEdit',
      },
      {
        title: 'Permission',
        path: '/permissions',
        page: 'Permission/PermissionList',
        exact: true,
      },
      {
        title: 'create-permission',
        path: '/permissions/create',
        page: 'Permission/PermissionCreate',
        isCreate: true,
      },
      {
        title: 'edit-permission',
        path: '/permissions/:permissionId',
        page: 'Permission/PermissionEdit',
      },
    ],
  },
  {
    title: 'Setting',
    path: '/setting',
    page: 'Setting',
    icon: <SettingOutlined />,
  },
]

const routerDom: ReactNode[] = []
const parseRoutes = (routeList: IRouteItem[]) => {
  routeList.forEach((route) => {
    if (route.children) {
      parseRoutes(route.children)
    }

    const C = React.lazy(() => import(`../pages/${route.page}`))

    routerDom.push(
      <ProtectedRouteWrapper
        {...route}
        key={route.children ? `group-${route.title}` : route?.path}
        exact={route.exact}
      >
        <C />
      </ProtectedRouteWrapper>
    )
  })

  return routerDom
}

export const masterRoute = parseRoutes(masterRouteList)
