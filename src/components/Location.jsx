import React, {useState} from 'react'
// import filteredPlaces from 'src/PlaceGrab.jsx'


export default function Location() {
    let placeHolder = 'Where Do I Want To Eat'
    let [place, setPlace] = useState(placeHolder)
    let places = filteredPlaces
    let [disabled, setDisabled] = useState(false)



    function pickIt() {
        setPlace(places[randomInt(0, places.length-1)].name)

        console.log(place)
    }

    return(
        <div className="selector--block">
            <h1 className='location--display' >{place}</h1>
            <div id='map' className='map'></div>
            <div className='location--form'> 
                <button id='selectorButton' className='location--button'  onClick={pickIt} disabled={disabled} >Decide for me</button>
            </div>
        </div>

    )
}