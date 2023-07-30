import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import userService from '../service/users.service'
import { toast } from 'react-toastify'
import IconSVG from '../components/common/iconSVG'

const UserContext = React.createContext()

export const useUsers = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // вызов getUsers() при монтировании компонента
  useEffect(() => {
    getUsers()
  }, [])
  // обработка/показ ошибки пользователю
  useEffect(() => {
    if (error !== null) {
      toast.error(error)
      setError(null)
    }
  }, [error])
  async function getUsers() {
    try {
      const {content} = await userService.get()
      setUsers(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }
  function getUserById(userId) {
    return users.find(user => user._id === userId)
  }

  const errorCatcher = (error) => {
    const {message} = error.response.data
    setError(message)
    setLoading(false)
  }

  return (
    <UserContext.Provider value={{users, getUserById}}>
      {!isLoading ? children : <IconSVG id='loader'/>}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default UserProvider
