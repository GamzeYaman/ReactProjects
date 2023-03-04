import axios from 'axios';
import { createContext, useContext, useEffect, useState} from 'react'
import data from '../cityData/cities_of_turkey.json'

const WeatherContext = createContext();

export const WeatherProvider = ( {children} ) => {
    const cities= data;
    const [city, setCity] = useState('Ankara');
    const [weatherData, setWeatherData] = useState([]);
    const values = {city, setCity, weatherData, setWeatherData, cities};

    useEffect(() => {
      let selectCities = data.filter(item => item.name === city)[0];
      let key = "c60488d6eb974a92916164903231302";

      axios(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectCities.latitude},${selectCities.longitude}&days=8&hour=24`)
      .then(response => response.data)
      .then(response => response.forecast)
      .then(response => setWeatherData(response.forecastday))
    }, [city])

  return (
    <div>
      <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    </div>
  )
}

export const useWeather = () => useContext(WeatherContext);
