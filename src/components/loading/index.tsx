import { Spin } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}
    >
      <Spin />
    </div>
  )
}

export default Loading
