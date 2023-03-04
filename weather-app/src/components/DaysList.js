import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { useWeather } from '../context/WeatherContext'

function DaysList() {
    let {weatherData} = useWeather();
    const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return (
    <div className='header'>
      <CardGroup className='text-center'>
        {
            weatherData.map((item, index) => {
                const date = new Date(item.date);
                const dayNumber = date.getDay();            
                const day = daysofWeek[dayNumber];

                return(
                    <Card key={index}>
                        <Card.Body>
                            <Card.Title>{day}</Card.Title>
                            <img variant='top' src={item.day.condition.icon} alt="desc" style={{width:"50px"}}/>
                        </Card.Body>
                        <Card.Footer>
                            <small><b>{item.day.maxtemp_c}°C</b> / <b>{item.day.mintemp_c}°C</b></small>
                        </Card.Footer>
                    </Card>
                )
            })
        }
      </CardGroup>
    </div>
  )
}

export default React.memo(DaysList)
