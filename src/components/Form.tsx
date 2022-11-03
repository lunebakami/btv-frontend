import { Button, Form, Input, notification } from 'antd'
import React from 'react'
import { graphql, useMutation } from 'react-relay'

const FormComponent: React.FC = () => {
  const mutation = graphql`
    mutation FormCreateUserMutation($name: String!, $email: String!) {
      createUser(input: { name: $name, email: $email }) {
        name
        email
      }
    }
  `

  const [commit] = useMutation(mutation)

  const handleCreateUser = (name: string, email: string) => {
    const config = {
      variables: {
        name,
        email,
      },
    }

    commit(config)
  }

  const onFinish = (data: any) => {
    handleCreateUser(data.name, data.email)

    notification.success({
      message: 'User added!',
      description: 'User successfuly added, please update your page!',
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    notification.error({
      message: 'Error',
      description: errorInfo,
    })
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormComponent
