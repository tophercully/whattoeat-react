import { useEffect, useState } from 'react'
import Location from './components/Location.jsx'
import {Wrapper, Status} from '@googlemaps/react-wrapper'
import MapGrabber  from './components/MapGrabber'
import FilterMenu from './components/FilterMenu.jsx'
import './App.css'
import { useLocalStorage } from '@uidotdev/usehooks'

export const App = () => {
  const [count, setCount] = useState(0)

  const [places, setPlaces] = useState('placeholder')
  const [isLoaded, setIsLoaded] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [filters, setFilters] = useLocalStorage('filters', window.localStorage.getItem('filters') ? window.localStorage.getItem('filters') : {
    price: 2,
    distance: 2000,
  })

  function spinBurst() {
    const burst = document.getElementsByClassName('burst')
  }

  return (
    <div className='app'>
     <svg className='grain-container' style={{width:0, height:0}}>
      <filter id='grain' opacity="0.14">
        <feTurbulence
          type='turbulence'
          baseFrequency={0.5}
        />
        <feComponentTransfer>
    <feFuncA type="linear" slope="0.2"/>
  </feComponentTransfer>
  <feMerge> 
    <feMergeNode/>
    <feMergeNode in="SourceGraphic"/> 
  </feMerge>
      </filter>
     </svg>
      <Wrapper apiKey='AIzaSyBL5PB9WLQmumeY-9KHgwsHOSP1L7ExP2k' libraries={["places"]}>
        <MapGrabber
          filters={filters}
          places={places}
          setPlaces={setPlaces} 
          isLoaded={isLoaded} 
          setIsLoaded={setIsLoaded}
        />
      </Wrapper>
      <FilterMenu 
        filters={filters} 
        setFilters={setFilters} 
        setIsLoaded={setIsLoaded} 
        pressed={pressed} 
        setPressed={setPressed}
        />
      <Location 
        isLoaded={isLoaded} 
        places={places} 
        pressed={pressed} 
        setPressed={setPressed}
      />
       <br></br>
       <img className='burst' src='burst.svg'></img>
    </div>
  )
}