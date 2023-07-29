import React, {useRef, useState } from 'react'
import './widget.css'
import {getWeather} from '../services/http.service'
import search_icon from '../assets/search.svg'
import humidity_icon from '../assets/humidity.svg'
import wind_icon from '../assets/wind.svg'
import loading_icon from '../assets/loading.svg'
import arrowUp_icon from '../assets/arrow-up.svg'
import arrowDown_icon from '../assets/arrow-down.svg'

const Widget = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [display, setDisplay] = useState(false)
  const [firstState, setFirstState] = useState(true)
  const [error, setError] = useState(null)
  const sityInput = useRef(null)

  const getValue = async () => {
    setWeatherData(null)
    setFirstState(false)
    setDisplay(true)
    const el = document.querySelector('.search')
    el.classList.add('show')

    setTimeout(() => {
      const btn_arrows = document.querySelector('.btn_arrows')
      btn_arrows.classList.remove('hide')
    }, 10)

    const sityName = sityInput.current.value.trim()

    try {
      await getWeather(sityName).then(data => setWeatherData({
        ...data,
        icon_src: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`  
      }))
     setError(null)
    } catch (error) {
      setError(error)
    }
  }
  
  const clearData = (e) => {
    e.stopPropagation()
    
    const el_search = document.querySelector('.search')
    display ? setDisplay(false) : setDisplay(true)
    el_search.classList.toggle('show')
  }

  document.addEventListener('click', (e) => {
    e.stopPropagation()

    const el_search = document.querySelector('.search')
    const {target} = e
    const its_menu = target === el_search || el_search.contains(target)
    if (!its_menu) {
      setDisplay(false)
      el_search.classList.remove('show')
    }
  })

  return (
    <div className='search'>
      <div className="search-place">
        <input ref={sityInput} type="text" defaultValue='London'/>
        <button onClick={getValue}>
          <img src={search_icon} alt="Search"/>
        </button>
        {!firstState && (
          <button className='btn_arrows hide' onClick={clearData}>
            <img src={display ? arrowUp_icon : arrowDown_icon} alt="show/hide"/>
          </button>
        )}
      </div>

      {weatherData && display ? (
        <div className="info">

          <div className="info__col">
            <img className='info__weather-img' src={weatherData.icon_src} />

            <div className="info__row">
              <p className="info__cels">
                {weatherData.main.temp.toString().slice(0,2)} °C
              </p>
              <p className="info__descrip">
                {weatherData.weather[0].description}
              </p>
            </div>

          </div>
          <div className="info-col">
            <div className='info-humidity'>
              <img src={humidity_icon} alt="Search"/>
              <div className="info-humidity__col">
                <p>{weatherData.main.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className='info-wind'>
              <img src={wind_icon} alt="Search"/>
              <div className="info-wind__col">
                <p>{weatherData.wind.speed} <span><b>Km/h</b></span></p>
                <span>Wind speed</span>
              </div>
            </div>
          </div>
        </div>
      ) : (error ? <h3>
        {error.message === 'Network Error' ? error.message + ' :(' : 'Sity not found :('} 
      </h3> : (
        display && (
          <div className="loading-icon">
            <img src={loading_icon}/>
          </div>
        )
      ))
      }
    </div>
  )
}

export default Widget