import axois from 'axios'
import config from '../config.json'
import {getGeolocation} from '../services/geo.service'

export const getWeather = async (sityName) => {
  const API_key = config.API_key

  const {lat, lon} = await getGeolocation(sityName)
  const apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`

  const {data} = await axois.get(apiEndPoint)
  return data
}
