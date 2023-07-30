import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
// utils, css
import './userEdit.module.css'
import { validator } from '../../../utils/validator'
import { validatorConfig } from '../../../utils/validatorConfig'
import { useQualities } from '../../../hooks/useQualities'
import { useProfession } from '../../../hooks/useProfession'
import { useAuth } from '../../../hooks/useAuth'
// components
import TextField from '../../common/form/textField'
import SelectField from '../../common/form/selectField'
import RadioField from '../../common/form/radioField'
import MultiSelectField from '../../common/form/multiSelectField'
import IconSVG from '../../common/iconSVG'

const UserEdit = ({ userId, edit }) => {
  const history = useHistory()
  const { qualities, getQuality } = useQualities()
  const { professions } = useProfession()
  const { currentUser, updateUser } = useAuth()
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState(currentUser)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (qualities && professions && currentUser) {
      setLoading(false)
    }
  }, [qualities, professions, currentUser])
  useEffect(() => {
    if (edit && userId !== currentUser._id) {
      history.replace(`/users/${currentUser._id}/edit`)
    }
  }, [])

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
    updateUser(data)
    history.replace(`/Users/${currentUser._id}`)
  }
  const backWithoutSave = () => {
    history.replace(`/Users/${userId}`)
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        {!isLoading ? (
          <div className="col-md-6 offset-md-3 shadow p-4">
            <form className="form" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={data.name}
                type="text"
                onChange={handleChange}
                errors={errors}
              />
              <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                errors={errors}
              />
              <SelectField
                name="profession"
                label="Your profession:"
                defaultOption="Change your profession..."
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
                label="Change your qualities:"
                defaultValue={getQuality(currentUser.qualities)}
                qualities={qualities}
                onChange={handleChange}
              />
              <div className="w-100 d-flex justify-content-between">
                <button
                  className="btn btn-secondary mx-auto"
                  onClick={backWithoutSave}
                >
                  Back without save
                </button>
                <button
                  disabled={!(Object.keys(errors).length === 0)}
                  type="submit"
                  className="btn btn-primary mx-auto"
                >
                  Save and back
                </button>
              </div>
            </form>
          </div>
        ) : (
          <IconSVG id="loader"/>
        )}
      </div>
    </div>
  )
}

UserEdit.propTypes = {
  userId: PropTypes.string,
  edit: PropTypes.string
}

export default UserEdit
