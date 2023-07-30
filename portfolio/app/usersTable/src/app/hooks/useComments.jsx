import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useAuth } from './useAuth'
import { nanoid } from 'nanoid'
import CommentService from '../service/comment.service'
import { toast } from 'react-toastify'

const CommentsContext = React.createContext()
export const useComments = () => {
  return useContext(CommentsContext)
}

export const CommentsProvider = ({ children }) => {
  // const [isLoading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null)
  const { userId } = useParams()
  const { currentUser } = useAuth()

  useEffect(() => {
    getComments()
  }, [userId])
  
  const createComment = async (data) => {
    const comment = {
      ...data,
      _id: nanoid(),
      pageId: userId,
      userId: currentUser._id,
      created_at: Date.now()
    }
    try {
      const { content } = await CommentService.createComment(comment)
      setComments(prev => [...prev, content])
    } catch (error) {
      errorCatcher(error)
    }
  }
  async function getComments() {
    try {
      const { content } = await CommentService.getComments(userId)
      setComments(content)
    } catch (error) {
      errorCatcher(error)
    } finally {
      // setLoading(false)
    }
  }
  async function removeComment(commentId) {
    try {
      const { content } = await CommentService.deleteComment(commentId)
      console.log(content)
      setComments(prevState => prevState.filter(c => c._id !== commentId))
    } catch (error) {
      errorCatcher(error)
    } finally {
      // setLoading(false)
    }
  }
  // обработка/показ ошибки пользователю
  useEffect(() => {
    if (error !== null) {
      toast.error(error)
      setError(null)
    }
  }, [error])
  const errorCatcher = (error) => {
    const { message } = error.response.data
    setError(message)
  }
  
  return (
    <CommentsContext.Provider
      value={{comments, createComment, removeComment}}
    >
      {children}
    </CommentsContext.Provider>
  )
}

CommentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default CommentsProvider
