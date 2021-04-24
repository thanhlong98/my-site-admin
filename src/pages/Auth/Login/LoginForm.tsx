import { BAD_USER_INPUT } from '@/constants'
import { useMutation } from '@apollo/client'
import { Button, Form, Input, message, notification } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { switchAuthen } from '../authSlice'
import { LOGIN } from '../mutations'

const LoginForm = () => {
  const [form] = Form.useForm()
  const [loginLocal, { loading }] = useMutation(LOGIN)
  const dispath = useDispatch()

  const handleSubmit = async (values) => {
    try {
      const { data } = await loginLocal({ variables: { ...values } })

      if (data) {
        notification.success({
          placement: 'bottomRight',
          duration: 3,
          message: 'Đăng nhập thành công',
        })

        dispath(switchAuthen({ state: true }))
      }
    } catch (error) {
      console.log(error)

      if (error.message === BAD_USER_INPUT) {
        const errors = error?.graphQLErrors[0]?.extensions?.fields?.map(
          (err: any) => ({ name: err.name, errors: err.message })
        )

        form.setFields(errors)
      } else {
        message.warning(error?.message)
      }
    }
  }

  return (
    <Form form={form} name="login" layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Bạn chưa nhập mật email' }]}
      >
        <Input size="large" placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Bạn chưa nhập mật khẩu' }]}
      >
        <Input.Password size="large" placeholder="Mật khẩu" />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Button
          size="large"
          type="primary"
          block
          loading={loading}
          htmlType="submit"
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
