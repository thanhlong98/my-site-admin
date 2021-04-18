import React from 'react'

const AuthLayout: React.FC = ({ children }) => {
  return (
    <div>
      <p>Login/Register layout</p>
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout
