import { useState } from 'react'
import Header from './components/Header.jsx'
import Location from './components/Location.jsx'
import {Wrapper, Status} from '@googlemaps/react-wrapper'
import MapGrabber  from './components/MapGrabber'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let [places, setPlaces] = useState('placeholder')
  let [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {/* <Header/> */}
      <Wrapper apiKey='AIzaSyBL5PB9WLQmumeY-9KHgwsHOSP1L7ExP2k' libraries={["places"]}>
            <MapGrabber places={places} setPlaces={setPlaces} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      </Wrapper>
      <Location isLoaded={isLoaded} places={places}/>
    </>
  )
}

export default App
