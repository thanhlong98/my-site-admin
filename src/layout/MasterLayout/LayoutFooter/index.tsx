import { Layout } from 'antd'
import React from 'react'

const LayoutFooter: React.FC = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      OMG ©{new Date().getFullYear()} Created by LongNguyen
    </Layout.Footer>
  )
}

export default LayoutFooter
