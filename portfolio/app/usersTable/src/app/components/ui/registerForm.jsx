import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useHistory } from 'react-router-dom'
import { useProfession } from '../../hooks/useProfession'
import { useQualities } from '../../hooks/useQualities'
import { useAuth } from '../../hooks/useAuth'
// utils, css
import './form.module.css'
import { validator } from '../../utils/validator'
import { validatorConfig } from '../../utils/validatorConfig'
// components
import TextField from '../common/form/textField'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'
import CheckBoxField from '../common/form/checkBoxField'

const RegisterForm = () => {
  // состояние ошибок для валидации форм + validate()
  const [errors, setErrors] = useState({})
  // значение полей формы
  const [data, setData] = useState({
    name: '',
    email: 'user@example.com',
    password: 'Alex1234',
    profession: '',
    sex: 'male',
    qualities: [],
    licence: false
  })
  const history = useHistory()
  const {signUp} = useAuth()
  const {qualities} = useQualities()
  const {professions} = useProfession()

  // handleChange => onChange в дочерних компонентах (полях)
  const handleChange = (fieldData) => {
    setData((prevState) => ({
      ...prevState,
      [fieldData.name]: fieldData.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ifValid = validate()
    if (!ifValid) return

    try {
      await signUp({
        ...data
        // qualities: data.qualities.map(q => q.value)
      })
      console.log({
        ...data
        // qualities: data.qualities.map(q => q.value)
      })
      history.push('/main')
    } catch (error) {
      setErrors(error)
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
      <h2>Registration</h2>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Login/mail:"
          name="email"
          value={data.email}
          onChange={handleChange}
          errors={errors}
        />
        <TextField
          label="Name:"
          name="name"
          value={data.name}
          onChange={handleChange}
          errors={errors}
        />
        <TextField
          label="Password:"
          name="password"
          value={data.password}
          type="password"
          onChange={handleChange}
          errors={errors}
        />
        <SelectField
          name="profession"
          label="Your profession:"
          defaultOption="Choose your profession..."
          value={data.profession}
          professions={professions}
          error={errors.profession}
          onChange={handleChange}
        />
        <RadioField
          options={[
            { name: 'Male', value: 'male' },
            { name: 'Female', value: 'female' },
            { name: 'Other', value: 'other' }
          ]}
          value={data.sex}
          name="sex"
          onChange={handleChange}
        />
        <MultiSelectField
          name="qualities"
          label="Choose your qualities:"
          defaultValue={data.qualities}
          qualities={qualities}
          onChange={handleChange}
        />
        <CheckBoxField
          value={data.licence}
          onChange={handleChange}
          name="licence"
          error={errors.licence}
        >
          Confirm the <a href="">license agreement</a>.
        </CheckBoxField>
        <button
          type="submit"
          disabled={!isValid}
          className="btn btn-primary w-100 mx-auto"
        >
          Register
        </button>
        <p className="mt-2">
          If you have account, please <Link to="/Login">Sign in</Link>
        </p>
      </form>
    </>
  )
}

export default RegisterForm
