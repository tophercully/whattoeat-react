import React, {useState} from 'react'


// import filteredPlaces from 'src/PlaceGrab.jsx'


export default function Location(props) {
    let placeHolder = {
        name: 'Where Do You Want To Eat?'
    }
    let [place, setPlace] = useState(placeHolder)
    let disabled = props.isLoaded ? false : true
    let buttonMsg = props.isLoaded ? 'Decide for me' : 'Searching for places...'
    let starURL = props.pressed ? 'src/assets/star.svg' : ''

    function pickIt() {
        var num = Math.floor(Math.random()*props.places.length)
        setPlace(props.places[num])
        props.setPressed(true)
    }


    //update background
    // const [bg, setBG] = useState('https://i.pinimg.com/originals/de/7e/de/de7ede8ab5c498d7bc833f2f8e41372b.jpg')
    // document.getElementById('bgImg').setAttribute(src='bg')


    return(
        <div className="location">
            <div className='location--display'>
                <h1 className='location--display--name' >{place.name}</h1>
                <div className='location--rating'>
                    <img src={starURL} className='location--rating--star'/>
                    <span className='location--rating--value'>{place.rating}</span>
                </div>
            </div>
            
            <div id='map' className='map'></div>
            <div className='location--form'> 
                <button id='selectorButton' className='location--button'  onClick={pickIt} disabled={disabled} >{buttonMsg}</button>
            </div>
        </div>
        
    )
}