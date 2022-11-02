import React from 'react'

import { Button, notification, Table } from 'antd'
import FormComponent from '../../components/Form'
import { Container } from './styles'
import { graphql, useFragment, useMutation } from 'react-relay'

type Props = {
  query: any
}

const MainPage: React.FC<Props> = (props: Props) => {
  const result = useFragment(
    graphql`
      fragment MainPage_query on Query
      @refetchable(queryName: "MainPageQuery") {
        getUsers {
          id
          name
          email
        }
      }
    `,
    props.query
  )

  const [commit] = useMutation(graphql`
    mutation MainPageDeleteUserMutation($id: String!) {
      deleteUser(id: $id) {
        name
        email
      }
    }
  `)

  const handleDeleteUser = async (id: string) => {
    commit({
      variables: {
        id,
      },
      onCompleted({ deleteUser }: any) {
        notification.success({
          message: `User ${deleteUser.name} successfuly deleted!`,
        })
      },
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (row: any) => (
        <Button type="primary" danger onClick={() => handleDeleteUser(row.id)}>
          Delete User
        </Button>
      ),
    },
  ]

  return (
    <Container>
      <h3>Add your user</h3>
      <FormComponent />
      <Table dataSource={result.getUsers} columns={columns} />
    </Container>
  )
}

export default MainPage
