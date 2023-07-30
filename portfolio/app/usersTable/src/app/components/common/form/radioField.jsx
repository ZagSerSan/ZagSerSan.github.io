import React from 'react'
import PropTypes from 'prop-types'
import style from './form.module.css'

const RadioField = ({ label, options, name, onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  return (
    <div className={'mb-4 ' + style.pointerForOptoins}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      {options.map((option) => (
        <div
          key={option.name + '_' + option.value}
          className="form-check form-check-inline"
        >
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={option.name + '_' + option.value}
            value={option.value}
            checked={option.value === value}
            onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor={option.name + '_' + option.value}
          >
            {option.name}
          </label>
        </div>
      ))}
    </div>
  )
}

RadioField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default RadioField
