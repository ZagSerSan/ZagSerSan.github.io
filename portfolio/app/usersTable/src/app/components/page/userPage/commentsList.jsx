import React from 'react'
import PropTypes from 'prop-types'
import { orderBy } from 'lodash'
import { useComments } from '../../../hooks/useComments'
import './commentsList.css'
import Comment from './comment'
import AddCommentForm from './addCommentForm'

const CommentsList = () => {
  const { createComment, comments, removeComment } = useComments()

  const addComment = (commentData) => {
    createComment(commentData)
  }
  const deleteComment = (commentId) => {
    removeComment(commentId)
  }

  const sortedComments = orderBy(comments, ['created_at'], ['desc'])

  return (
    <>
      <div className="card mb-2">
        {' '}
        <div className="card-body ">
          <AddCommentForm onSubmit={addComment} />
        </div>
      </div>

      {sortedComments.length > 0 ? (
        <div className="card mb-3">
          <div className="card-body ">
            <h2>Comments</h2>
            <hr />
            {sortedComments.map((comment) => (
              <Comment
                key={comment._id}
                commentUserId={comment.userId}
                comment={comment}
                onDelete={deleteComment}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}

CommentsList.propTypes = {
  userId: PropTypes.string.isRequired
}

export default CommentsList
