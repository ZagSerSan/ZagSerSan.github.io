import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

const Bookmark = ({ user, toggleBookMark }) => {
  return (
    <>
      <button
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={() => toggleBookMark(user._id)}
      >
        {user.bookmark ? (
          <i
            style={{ fontSize: '20px' }}
            className="bi bi-bookmark-star-fill"
          ></i>
        ) : (
          <i style={{ fontSize: '20px' }} className="bi bi-bookmark"></i>
        )}
      </button>
    </>
  )
}
Bookmark.propTypes = {
  user: PropTypes.object.isRequired,
  toggleBookMark: PropTypes.func.isRequired
}
export default Bookmark
