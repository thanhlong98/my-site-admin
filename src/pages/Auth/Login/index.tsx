import AuthLayout from '@/layout/AuthLayout'
import { Typography } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { switchAuthen } from '../authSlice'
import LoginForm from './LoginForm'

const { Title } = Typography

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    dispatch(switchAuthen({ state: true }))
  }

  return (
    <AuthLayout>
      <Title style={{ textAlign: 'center' }} level={1}>
        Đăng nhập
      </Title>

      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
