import React from 'react'
import { useParams } from 'react-router-dom'
// components
import UserPage from '../components/page/userPage'
import UserEdit from '../components/page/userPage/userEdit'
import UsersList from '../components/page/usersListPage'
import UserProvider from '../hooks/useUsers'

const Users = () => {
  const { userId, edit } = useParams()

  return (
    <UserProvider>
      {userId ? (
        edit ? (
          <UserEdit {...{userId, edit}} />
        ) : (
          <UserPage {...{ userId }} />
        )
      ) : (
        <UsersList />
      )}
    </UserProvider>
  )
}

export default Users
