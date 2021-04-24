import { IRouteItem } from '@/interfaces'
import { masterRouteList } from '@/routes/master.route'
import { Layout, Menu } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './LayoutSidebar.less'

const { SubMenu } = Menu

type Props = {
  // menuActiveKey?: string
}

function makeMenus(menus: IRouteItem[]) {
  if (!menus.length) return null

  return menus.map((menu) => {
    if (menu.children) {
      return (
        <SubMenu key={menu.path} title={menu.title} icon={menu.icon}>
          {menu.children.map((subMenu) => {
            if (subMenu.path.includes(':') || subMenu.isCreate) return null

            return (
              <Menu.Item key={subMenu.path} icon={subMenu.icon}>
                <Link to={subMenu.path}>{subMenu.title}</Link>
              </Menu.Item>
            )
          })}
        </SubMenu>
      )
    }

    if (menu.path.includes(':') || menu.isCreate) return null

    return (
      <Menu.Item key={menu.path} icon={menu.icon}>
        <Link to={menu.path}>{menu.title}</Link>
      </Menu.Item>
    )
  })
}

const LayoutSidebar: React.FC<Props> = () => {
  const { pathname } = useLocation()
  const keyOpenDefault =
    masterRouteList.find(
      (route) =>
        route.path === pathname ||
        !!route.children?.find((subRoute) => subRoute.path === pathname)
    )?.path || ''

  return (
    <Layout.Sider
      trigger={null}
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className="logo" />

      <Menu
        theme="dark"
        defaultOpenKeys={[keyOpenDefault]}
        defaultSelectedKeys={[pathname]}
        mode="inline"
      >
        {makeMenus(masterRouteList)}
      </Menu>
    </Layout.Sider>
  )
}

export default LayoutSidebar
