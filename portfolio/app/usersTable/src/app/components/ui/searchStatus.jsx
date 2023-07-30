import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

const SearchStatus = ({ count }) => {
  const handlePhrase = (number) => {
    return number !== 0 ? (
      <h1 style={{ fontSize: '24px' }} className="badge bg-primary">
        {number} человек тусанет с тобой сегодня
      </h1>
    ) : (
      <h1 style={{ fontSize: '24px' }} className="badge bg-danger">
        Hикто не тусанет с тобой сегодня
      </h1>
    )
  }

  return <>{handlePhrase(count)}</>
}
SearchStatus.propTypes = {
  count: PropTypes.number.isRequired
}
export default SearchStatus
