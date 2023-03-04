import React from 'react'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'
import { useWeather } from '../context/WeatherContext'

function SplitButton() {
    const {city, setCity, cities} = useWeather();

  return (
    <div className='header mt-4'>
      <Dropdown as={ButtonGroup} className='mb-3'>
      <Button variant="success">{city}</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu className='scrollable-menu'>
        {
            cities.map((item) => {
                return <Dropdown.Item  key={item.id} onClick={() => setCity(item.name)}>{item.name}</Dropdown.Item>
            })
        }

      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default React.memo(SplitButton)