import React, {useState} from 'react'


// import filteredPlaces from 'src/PlaceGrab.jsx'


export default function Location(props) {
    let placeHolder = {
        name: 'Where Do You Want To Eat?'
    }
    let [place, setPlace] = useState(placeHolder)
    let disabled = props.isLoaded ? false : true
    let buttonMsg = props.isLoaded ? 'Decide for me' : 'Searching for places...'
    console.log(place.name, place.rating)

    function pickIt() {
        var num = Math.floor(Math.random()*props.places.length)
        setPlace(props.places[num])
        props.setPressed(true)
    }

    let starURL = props.pressed ? 'src/assets/Star.png' : ''

    return(
        <div className="location">
            <div className='location--display'>
                <h1 className='location--display--name' >{place.name}</h1>
                <div className='location--rating'>
                    <img src={starURL} className='location--rating--star'/>
                    <p className='location--rating--value'>{place.rating}</p>
                </div>
            </div>
            
            <div id='map' className='map'></div>
            <div className='location--form'> 
                <button id='selectorButton' className='location--button'  onClick={pickIt} disabled={disabled} >{buttonMsg}</button>
            </div>
        </div>
        
    )
}