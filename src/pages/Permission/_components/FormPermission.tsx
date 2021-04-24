import React, { useEffect } from 'react'
import { IPermission } from '@/interfaces'
import { Button, Form, Input, message } from 'antd'
import { useMutation } from '@apollo/client'
import { CREATE_PERMISSION, UPDATE_PERMISSION } from '../mutations'
import { BAD_USER_INPUT } from '@/constants'

type Props = {
  initialValues?: IPermission
  handleSuccess: () => void
}

const FormPermission: React.FC<Props> = ({
  initialValues = { description: '' },
  handleSuccess,
}) => {
  const [form] = Form.useForm()

  const isEditable = !!initialValues?._id
  const [createPermission] = useMutation(CREATE_PERMISSION)
  const [updatePermission] = useMutation(UPDATE_PERMISSION)

  const handleSubmitForm = () => {
    form
      .validateFields()
      .then(async (values) => {
        if (isEditable) {
          const { data } = await updatePermission({
            variables: {
              input: {
                ...values,
                _id: initialValues._id,
              },
            },
          })
        } else {
          const { data } = await createPermission({
            variables: {
              input: values,
            },
          })
        }
        handleSuccess()
      })
      .catch((error) => {
        console.log(JSON.stringify(error, null, 2))

        if (error.message === BAD_USER_INPUT) {
          const errors = error?.graphQLErrors[0]?.extensions?.fields?.map(
            (err: any) => ({ name: err.name, errors: err.message })
          )

          form.setFields(errors)
        } else {
          message.warning(error?.message)
        }
      })
  }

  return (
    <Form
      form={form}
      layout="vertical"
      size="large"
      initialValues={initialValues}
      onFinish={handleSubmitForm}
    >
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter Name' }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: 'Please enter Slug' }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}
        >
          <Input />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEditable ? 'Edit permission' : 'Create permission'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormPermission
