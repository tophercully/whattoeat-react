import { useState } from 'react'
import Header from './components/Header.jsx'
import Location from './components/Location.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Location/> */}
    </>
  )
}

export default App
