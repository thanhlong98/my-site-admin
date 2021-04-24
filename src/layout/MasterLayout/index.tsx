import Loading from '@/components/Loading'
import { switchAuthen } from '@/pages/Auth/authSlice'
import { ME } from '@/pages/User/queries'
import { useQuery } from '@apollo/client'
import { Layout } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LayoutFooter from './LayoutFooter'
import LayoutHeader from './LayoutHeader'
import LayoutSidebar from './LayoutSidebar'
import './styles.less'

const { Content } = Layout

const MasterLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const dispatch = useDispatch()
  const { data, error, loading } = useQuery(ME)

  if (loading) {
    return <Loading />
  }

  if (error) {
    console.log(JSON.stringify(error, null, 2))

    const isTokenInValid = (error.networkError as any)?.result?.errors.some(
      (err) => err.extensions.code === 'TOKEN_INVALID'
    )

    if (isTokenInValid) {
      dispatch(switchAuthen({ state: false }))
    }
  }

  console.log(data)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSidebar />
      <Layout className="site-layout">
        <LayoutHeader />

        <Content style={{ margin: '24px 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>

        <LayoutFooter />
      </Layout>
    </Layout>
  )
}

export default MasterLayout
