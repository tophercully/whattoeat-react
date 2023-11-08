import { useState } from 'react'
import Location from './components/Location.jsx'
import {Wrapper, Status} from '@googlemaps/react-wrapper'
import MapGrabber  from './components/MapGrabber'
import FilterMenu from './components/FilterMenu.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [places, setPlaces] = useState('placeholder')
  const [isLoaded, setIsLoaded] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [filters, setFilters] = useState({
    price: 2,
    distance: 2000,
  })

  return (
    <>
      {/* <Header/> */}
      <FilterMenu 
        filters={filters} 
        setFilters={setFilters} 
        setIsLoaded={setIsLoaded} 
        pressed={pressed} 
        setPressed={setPressed}
        />
      <Wrapper apiKey='AIzaSyBL5PB9WLQmumeY-9KHgwsHOSP1L7ExP2k' libraries={["places"]}>
            <MapGrabber 
              filters={filters}
              places={places} 
              setPlaces={setPlaces} 
              isLoaded={isLoaded} 
              setIsLoaded={setIsLoaded}
            />
      </Wrapper>
      <Location 
        isLoaded={isLoaded} 
        places={places} 
        pressed={pressed} 
        setPressed={setPressed}
      />
    </>
  )
}

export default App
