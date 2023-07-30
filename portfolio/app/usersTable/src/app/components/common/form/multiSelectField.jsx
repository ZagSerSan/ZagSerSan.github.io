import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const MultiSelectField = ({
  qualities,
  onChange,
  name,
  label,
  defaultValue
}) => {
  const qualitiesArray =
    !Array.isArray(qualities) && typeof qualities === 'object'
      ? Object.values(qualities)
      : qualities.map(item => ({label: item.name, value: item._id}))

  const defaultQualities =
    Array.isArray(defaultValue)
      ? defaultValue.map(item => ({label: item.name, value: item._id}))
      : defaultValue

  const handleChange = (value) => {
    const newData = value.map(item => item.value)
    onChange({ name, value: newData })
  }

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>

      <Select
        isMulti
        closeMenuOnSelect={false}
        className="basic-multi-select"
        classNamePrefix="select"
        defaultValue={defaultQualities}
        name={name}
        options={qualitiesArray}
        onChange={handleChange}
      />
    </div>
  )
}

MultiSelectField.propTypes = {
  defaultValue: PropTypes.array,
  qualities: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string
}

export default MultiSelectField
