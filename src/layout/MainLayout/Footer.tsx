import { Layout } from 'antd'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by LongNguyen
    </Layout.Footer>
  )
}

export default Footer
