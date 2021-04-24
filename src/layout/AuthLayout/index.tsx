import OmgBlack from '@/assets/svg/omg-black.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.less'

const AuthLayout: React.FC = ({ children }) => {
  return (
    <div className="login-register-page">
      <div className="login-register-logo">
        <Link to="/">
          <img className="logo" src={OmgBlack} />
        </Link>
      </div>
      <div className="login-register-container">
        <div className="login-register-form">
          <div className="wrapper-form">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
