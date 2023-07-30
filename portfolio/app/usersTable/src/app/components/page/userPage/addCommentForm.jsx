import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { validator } from '../../../utils/validator'
import { validatorConfig } from '../../../utils/validatorConfig'
import { toast } from 'react-toastify'

const AddCommentForm = ({ onSubmit }) => {
  const [errors, setErrors] = useState({})
  const [isBlured, setIsBlured] = useState(false)
  const [commentData, setCommentData] = useState({content: ''})

  const handleChange = ({ target }) => {
    setCommentData((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
    setIsBlured(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) {
      toast.info('Комметнарий не может быть пустым.')
      return setIsBlured(true)
    }
    onSubmit(commentData)
    setCommentData({content: ''})
    setIsBlured(false)
  }

  useEffect(() => {
    validate()
  }, [commentData])

  const validate = () => {
    const errors = validator(commentData, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <form>
      <div className="form-group mb-3">
        <label htmlFor="new-comment-textarea-1">New comment</label>
        <textarea
          name="content"
          className={
            'form-control' +
            (!isBlured ? '' : errors.content ? ' is-invalid' : ' is-valid')
          }
          id="new-comment-textarea-1"
          onChange={handleChange}
          value={commentData.content}
        ></textarea>
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Опубликовать
      </button>
    </form>
  )
}

AddCommentForm.propTypes = {
  onSubmit: PropTypes.func
}

export default AddCommentForm
