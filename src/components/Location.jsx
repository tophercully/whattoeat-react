import React, {useState} from 'react'


// import filteredPlaces from 'src/PlaceGrab.jsx'


export default function Location(props) {
    let placeHolder = {
        name: 'Where Do You Want To Eat?'
    }
    const denials = [
        "Nah, that's not it",
        "hmm nuh uh",
        "Anything but that",
        "One more",
    ]

    const angryDenials = [
        "Maybe try listing the places you *do* like??",
        "We're going to be here all day",
        "Decide on something already homie",
        "I'm this close to making an executive decision",
        "If you don't like this next one we're getting McDonalds",
        "I'm going to starve before you make a decision",
        "Clearly you didn't actually want me to decide",
        "I'm getting so hangry just pick"
    
    ]

    //use count to return more aggravated messages after 10 presses
    let [count, setCount] = useState(0)
    let [place, setPlace] = useState(placeHolder)
    let disabled = props.isLoaded ? false : true
    let buttonMsg = props.isLoaded ? "🤷 🤷 🤷" : 'Searching for places...'
    let starURL = props.pressed ? 'src/assets/starB.png' : ''
    let denialsNow = count < 5 ? denials : angryDenials
    let denialNow = denialsNow[Math.floor(Math.random()*denialsNow.length)]
    let finalMsg = props.pressed ? denialNow : buttonMsg
    
    function pickIt() {
        var num = Math.floor(Math.random()*props.places.length)
        setPlace(props.places[num])
        props.setPressed(true)
        setCount(prevCount => prevCount+1)
    }
    console.log(count)


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
                <button 
                id='selectorButton' 
                className='location--button'  
                onClick={pickIt} 
                disabled={disabled} >
                    {finalMsg}
                </button>
            </div>
        </div>
        
    )
}