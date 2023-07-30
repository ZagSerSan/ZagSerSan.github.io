import { useEffect, useState } from 'react'
import qualities from '../mockData/qualities.json'
import professions from '../mockData/professions.json'
import users from '../mockData/users.json'
import httpSerive from '../service/http.service'

const useMockData = () => {
  const statusConsts = {
    idle: 'Not started',
    pending: 'In Process',
    successed: 'Ready',
    error: 'Error occured'
  }
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(statusConsts.idle)
  const [progress, setProgress] = useState(0)
  // кол-во запросов
  const [count, setCount] = useState(0)
  const summuryCount = qualities.length + professions.length + users.length

  const updateProgress = () => {
    if (count !== 0 && status === statusConsts.idle) {
      setStatus(statusConsts.pending)
    }
    const newProgress = Math.floor((count / summuryCount) * 100)
    if (progress < newProgress) {
      setProgress(() => newProgress)
    }
    if (newProgress === 100) {
      setStatus(statusConsts.successed)
    }
  }
  useEffect(() => {
    updateProgress()
  }, [count])
  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  async function initialize() {
    try {
      for (const prof of professions) {
        await httpSerive.put('profession/' + prof._id, prof)
        incrementCount()
      }
      for (const user of users) {
        await httpSerive.put('user/' + user._id, user)
        incrementCount()
      }
      for (const quality of qualities) {
        await httpSerive.put('quality/' + quality._id, quality)
        incrementCount()
      }
    } catch (error) {
      setError(error)
      setStatus(statusConsts.error)
    }
  }

  return (
    {error, initialize, progress, status}
  )
}
 
export default useMockData
