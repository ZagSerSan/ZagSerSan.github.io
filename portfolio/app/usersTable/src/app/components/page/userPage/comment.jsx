import React from 'react'
import PropTypes from 'prop-types'
import { getDateFormat } from '../../../utils/formatDate'
import { useUsers } from '../../../hooks/useUsers'
import { useAuth } from '../../../hooks/useAuth'

const Comment = ({ commentUserId, comment, onDelete }) => {
  // получение пользователей написавших комментарии на текущей странице
  const { getUserById } = useUsers()
  const { currentUser } = useAuth()
  const commentedUser = getUserById(commentUserId)

  return (
    <div className="bg-light card-body  mb-3">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-start ">
            <img
              src={commentedUser.avatar}
              className="rounded-circle shadow-1-strong me-3"
              alt="avatar"
              width="65"
              height="65"
            />
            <div className="flex-grow-1 flex-shrink-1">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1 ">
                    {commentedUser?.name}
                    <span className="small">
                      {getDateFormat(comment.created_at)}
                    </span>
                  </p>
                  {currentUser._id === comment.userId && (
                    <button
                      onClick={() => onDelete(comment._id)}
                      className="btn btn-sm text-primary d-flex align-items-center"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  )}
                </div>
                <p className="small mb-0">{comment.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  commentUserId: PropTypes.string,
  comment: PropTypes.object,
  onDelete: PropTypes.func
}

export default Comment
