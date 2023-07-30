import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import { toast } from 'react-toastify'
import userService from '../service/users.service'
import localStorageService, { setTokens } from '../service/localStorage.service'
import { randomInt } from '../utils/randomInt'
import IconSVG from '../components/common/iconSVG'

export const httpAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY
  }
})
const AuthContext = React.createContext()
export const useAuth = () => {
  return useContext(AuthContext)
}

// AuthProvider
const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  // toggle bookmark
  // async function toggleBookmark(newUsersData) {
  //   const url = `accounts:update?key=${process.env.REACT_APP_FIREBASE_KEY}`
  //   const idToken = localStorageService.getAccessToken()
  //   try {
  //     const { content } = await userService.updateUser(newUsersData)
  //     // Обновление email для входа
  //     const { data } = await httpAuth.post(url, {idToken, email: newUsersData.email, returnSecureToken: true})
  //     console.log('data :>> ', data)
  //     console.log('content :>> ', content)
  //     history.replace(`/Users/${currentUser._id}`)
  //     return content
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // log out
  function logOut() {
    localStorageService.removeAuthData()
    setCurrentUser(null)
    history.push('/login')
  }

  // updateUser
  async function updateUser(newUserData) {
    const url = `accounts:update?key=${process.env.REACT_APP_FIREBASE_KEY}`
    const idToken = localStorageService.getAccessToken()
    try {
      const { content } = await userService.updateUser(newUserData)
      // Обновление email для входа
      const { data } = await httpAuth.post(url, {idToken, email: newUserData.email, returnSecureToken: true})
      console.log('data :>> ', data)
      // console.log('content :>> ', content)
      // history.replace(`/Users/${currentUser._id}`)
      return content
    } catch (error) {
      console.log(error)
    }
  }

  // signIn
  async function signIn({ email, password }) {
    const url = 'accounts:signInWithPassword'
    try {
      const {data} = await httpAuth.post(url, {email, password, returnSecureToken: true})
      setTokens(data)
      await getUserData()
      // переадресация
      history.push(
        history.location.state
          ? history.location.state.from.pathname
          : '/users'
      )
      toast.info('Logging is successful!')
      console.log(data)
    } catch (error) {
      errorCatcher(error)
      const { code, message } = error.response.data.error
      console.log(code, message)
      if (code === 400) {
        switch (message) {
          case 'INVALID_PASSWORD':
            throw new Error('Email или пароль введены некорректно')

          default:
            throw new Error(
              'Слишком много попыток входа. Попробуйте позже'
            )
        }
      }
      console.log(message)
      toast.error(message)
    }
  }

  // signUp
  async function signUp({email, password, ...rest}) {
    const url = `accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`
    try {
      const {data} = await httpAuth.post(url, {email, password, returnSecureToken: true})
      setTokens(data)
      await createUser({
        _id: data.localId,
        email,
        rate: randomInt(1, 5),
        completedMeetings: randomInt(0, 200),
        avatar: `https://avatars.dicebear.com/api/avataaars/${
          (Math.random() + 1).toString(36).substring(7)
        }.svg`,
        ...rest
      })
      console.log(data)
    } catch (error) {
      errorCatcher(error)
      const {code, message} = error.response.data.error
      if (code === 400) {
        if (message === 'EMAIL_EXISTS') {
          const errorObject = {
            email: 'Пользователь с таким email уже существует.'
          }
          throw errorObject
        }
      }
    }
  }

  // вспомогательные функции
  async function createUser(data) {
    try {
      const {content} = await userService.create(data)
      console.log(content)
      setCurrentUser(content)
    } catch (error) {
      errorCatcher(error)
    }
  }
  const errorCatcher = (error) => {
    const { message } = error.response.data
    setError(message)
  }
  const getUserData = async () => {
    try {
      const { content } = await userService.getCurrentUser()
      setCurrentUser(content)
    } catch (error) {
      setError(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (error !== null) {
      toast.error(error)
      setError(null)
    }
  }, [error])
  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData()
    } else {
      setIsLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{logOut, signUp, signIn, currentUser, updateUser}}>
      {!isLoading ? children : <IconSVG id='loader'/>}
    </AuthContext.Provider>
  )
}

// ------------------------
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AuthProvider
