import React from 'react'
import PropTypes from 'prop-types'
import style from './form.module.css'

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    // onChange({name: name, value: !value})
    onChange({name, value: !value})
  }

  const getValidationClasses = () => {
    return error ? ' is-invalid' : ' is-valid'
  }

  return (
    <div className={'form-check mb-4 ' + style.pointerForOptoins}>
      <input
        onBlur={getValidationClasses}
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  error: PropTypes.string
}

export default CheckBoxField
