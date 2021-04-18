import { menuRoutes } from '@/routes/menu.route'
import { Layout, Menu } from 'antd'
import React from 'react'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import './LayoutSidebar.less'

const { SubMenu } = Menu

type Props = {
  // menuActiveKey?: string
}

const Sidebar: React.FC<Props> = () => {
  const { pathname } = useLocation()

  return (
    <Layout.Sider
      trigger={null}
      breakpoint='lg'
      collapsedWidth='0'
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className='logo' />

      <Menu theme='dark' defaultSelectedKeys={[pathname]} mode='inline'>
        {menuRoutes.map(menu =>
          menu.childs ? (
            <SubMenu key={menu.dest} title={menu.title}>
              {menu.childs.map(subMenu => (
                <Menu.Item key={subMenu.dest}>
                  <Link to={subMenu.dest}>{subMenu.title}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={menu.dest}>
              <Link to={menu.dest}>{menu.title}</Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </Layout.Sider>
  )
}

export default Sidebar
