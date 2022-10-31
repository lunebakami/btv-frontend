import React from 'react'

import { Table } from 'antd'
import FormComponent from '../../components/Form'
import { Container } from './styles'
import { graphql, useFragment } from 'react-relay'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
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
]

type Props = {
  query: any
}

const MainPage: React.FC<Props> = (props: Props) => {
  const res = useFragment(
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

  console.log(res)

  return (
    <Container>
      <h3>Add your user</h3>
      <FormComponent />
      <Table dataSource={res.data} columns={columns} />
    </Container>
  )
}

export default MainPage
