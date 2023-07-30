import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
  name,
  label,
  defaultOption,
  value,
  professions,
  error,
  onChange
}) => {
  // состояние "форма была тронута"
  const [isBlured, setIsBlured] = useState(false)

  const optionsArray =
    !Array.isArray(professions) && typeof professions === 'object'
      ? Object.values(professions)
      : professions.map(item => ({label: item.name, value: item._id}))

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
    setIsBlured(true)
  }
  const toogleBluredState = () => {
    setIsBlured(true)
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <select
        className={
          'form-select' + (!isBlured ? '' : error ? ' is-invalid' : ' is-valid')
        }
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={toogleBluredState}
        required
      >
        <option disabled value="">
          {defaultOption}
        </option>

        {optionsArray &&
          optionsArray.map((profession) => (
            <option key={profession.value} value={profession.value}>
              {profession.label}
            </option>
          ))}
      </select>

      {error && (
        <div className="invalid-feedback">Please select a valid state.</div>
      )}
    </div>
  )
}

SelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  professions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  error: PropTypes.string,
  onChange: PropTypes.func
}

export default SelectField
