import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import qualityService from '../service/qualities.service'

const QualitiesContext = React.createContext()
export const useQualities = () => {
  return useContext(QualitiesContext)
}

export const QualitiesProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)

  // вызов getQualitiesList() при монтировании компонента
  useEffect(() => {
    getQualitiesList()
  }, [])
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
  function getQuality(ids) {
    const qualitiesArray = ids.map(id => {
      return qualities.find(q => q._id === id)
    })
    return qualitiesArray
  }
  async function getQualitiesList() {
    try {
      const { content } = await qualityService.get()
      setQualities(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }

  return (
    <QualitiesContext.Provider
      value={{ isLoading, qualities, setQualities, getQuality }}
    >
      {children}
    </QualitiesContext.Provider>
  )
}

QualitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
