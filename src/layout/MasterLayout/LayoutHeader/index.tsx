import { switchAuthen } from '@/pages/Auth/authSlice'
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Layout, Menu, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './LayoutHeader.less'

const LayoutHeader: React.FC = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(switchAuthen({ state: false }))
  }

  const menuUser = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">1st menu item</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile2">1st menu item</Link>
      </Menu.Item>
      <Menu.Item icon={<PoweroffOutlined />}>
        <a onClick={handleLogout}>Logout</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout.Header className="site-layout-header">
      <div style={{ flex: '1 1 0%' }}></div>
      <Space>
        <Dropdown overlay={menuUser} placement="bottomCenter" arrow>
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

export default LayoutHeader
