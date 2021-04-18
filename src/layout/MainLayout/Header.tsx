import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.less'

const menuUser = (
  <Menu>
    <Menu.Item>
      <Link to='/profile'>1st menu item</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/profile2'>1st menu item</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/profile3'>1st menu item</Link>
    </Menu.Item>
  </Menu>
)

const Header: React.FC = () => {
  return (
    <Layout.Header className='site-layout-header'>
      <div style={{ flex: '1 1 0%' }}></div>
      <Space>
        <Dropdown overlay={menuUser} placement='bottomCenter'>
          <a className='header__dropdown-link'>bbb</a>
        </Dropdown>
        <Dropdown overlay={menuUser} placement='bottomCenter'>
          <div>
            <Avatar
              style={{ backgroundColor: '#87d068', cursor: 'pointer' }}
              icon={<UserOutlined />}
            />
          </div>
        </Dropdown>
      </Space>
    </Layout.Header>
  )
}

export default Header
