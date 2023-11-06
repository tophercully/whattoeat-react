import React, {useState} from 'react'


// import filteredPlaces from 'src/PlaceGrab.jsx'


export default function Location(props) {
    let placeHolder = 'Where Do You Want To Eat?'
    let [place, setPlace] = useState(placeHolder)
    var disabled
    disabled = props.isLoaded ? false : true
    var rating = props.isLoaded ? place.rating : ''
    console.log(place)
    function pickIt() {
        var num = Math.floor(Math.random()*props.places.length)
        setPlace(props.places[num].name)

        
    }

    let buttonMsg = props.isLoaded ? 'Decide for me' : 'Searching for places...'


    return(
        <>
        
            <div className="selector--block">
                <h1 className='location--display' >{place}</h1>
                <div id='map' className='map'></div>
                <div className='location--form'> 
                    <button id='selectorButton' className='location--button'  onClick={pickIt} disabled={disabled} >{buttonMsg}</button>
                </div>
            </div>
        </>
    )
}