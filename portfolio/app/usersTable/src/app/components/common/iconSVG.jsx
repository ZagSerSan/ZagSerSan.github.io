import React from 'react'
import PropTypes from 'prop-types'
import { RotatingTriangles } from 'react-loader-spinner'
import style from './loader.module.css'

const IconSVG = ({ id, log }) => {
  switch (id) {
    case 'sort-ascending':
      return (
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M4 17H10M4 12H13M18 11V19M18 19L21 16M18 19L15 16M4 7H16"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'sort-descending':
      return (
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M4 17H16M4 12H13M4 7H10M18 13V5M18 5L21 8M18 5L15 8"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'loader':
      if (log) {
        console.log('IconLogger:', log)
      }
      return (
        <RotatingTriangles
          visible={true}
          height="100"
          width="100"
          ariaLabel="rotating-triangels-loading"
          wrapperStyle={{}}
          wrapperClass={'rotating-triangels-wrapper' + ` ${style.loader}`}
        />
      )
    default:
      return null
  }
}

IconSVG.propTypes = {
  id: PropTypes.string,
  log: PropTypes.array
}

export default IconSVG
