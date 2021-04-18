import { Layout } from 'antd'
import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import './styles.less'

const { Content } = Layout

const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className='site-layout'>
        <Header />

        <Content style={{ margin: '24px 16px' }}>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>

        <Footer />
      </Layout>
    </Layout>
  )
}

export default MainLayout
