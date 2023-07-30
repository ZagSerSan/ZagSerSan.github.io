import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import { useQualities } from '../../hooks/useQualities'

const Qualitie = ({ qualityIds }) => {
  const { isLoading, getQuality } = useQualities()
  const qualities = getQuality(qualityIds)
  // console.log(qualities)

  return (
    <>
      {!isLoading ? (
        qualities.map(quality => (
          <span
            key={quality._id}
            className={'badge bg-' + quality.color + ' m-1'}
          >
            {quality.name}
          </span>
        ))
      ) : 'loading...'
      }
    </>
  )
}
Qualitie.propTypes = {
  qualityIds: PropTypes.array
}
export default Qualitie
