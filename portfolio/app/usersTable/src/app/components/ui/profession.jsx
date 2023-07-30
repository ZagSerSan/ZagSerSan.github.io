import React from 'react'
import PropTypes from 'prop-types'
import { useProfession } from '../../hooks/useProfession'

const Profession = ({ id }) => {
  const { isLoading, getProfession } = useProfession()
  const prof = getProfession(id)
  return <div>{!isLoading ? prof.name : 'loading...'}</div>
}

Profession.propTypes = {
  id: PropTypes.string
}

export default Profession
