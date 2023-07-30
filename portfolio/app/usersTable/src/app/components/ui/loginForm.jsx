/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
// utils
import { validator } from '../../utils/validator'
import { validatorConfig } from '../../utils/validatorConfig'
// components
import TextField from '../common/form/textField'
import CheckBoxField from '../common/form/checkBoxField'
import { useAuth } from '../../hooks/useAuth'
import { toast } from 'react-toastify'

const loginForm = () => {
  // состояние ошибок для валидации форм + validate()
  const [errors, setErrors] = useState({})
  // значение полей формы
  const [data, setData] = useState({
    email: 'user@example.com',
    password: 'Alex1234',
    stayOn: false
  })
  const history = useHistory()
  const { email, password } = data
  const { signIn } = useAuth()

  const handleChange = (fieldData) => {
    setData((prevState) => ({
      ...prevState,
      [fieldData.name]: fieldData.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validate()
    const ifValid = validate()
    if (!ifValid) return
    // действие кнопки отправить если формы валидны
    try {
      await signIn(data)
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  // блокировка кнопки
  const isValid = Object.keys(errors).length === 0

  return (
    <>
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Login/email:"
          name="email"
          value={email}
          onChange={handleChange}
          errors={errors}
        />
        <TextField
          label="Password:"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          errors={errors}
        />
        <CheckBoxField
          value={data.stayOn}
          onChange={handleChange}
          name="stayOn"
        >
          Stay on the site.
        </CheckBoxField>
        <button
          type="submit"
          disabled={!isValid}
          className="btn btn-primary w-100 mx-auto"
        >
          Login
        </button>
        <p className="mt-2">
          If you don`t have account, please{' '}
          <Link to="/Login/register">Register</Link>
        </p>
      </form>
    </>
  )
}

export default loginForm
