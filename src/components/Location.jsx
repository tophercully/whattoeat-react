import React, {useState} from 'react'

export default function Location(props) {
    let placeHolder = {
        name: 'Where Do You Want To Eat?'
    }
    let appliedFilters = {
        name: 'Okay, what else will show up now?'
    }
    const denials = [
        "Nah, that's not it",
        "hmm nuh uh",
        "Anything but that",
        "Nah",
        "🙅🙅🙅"
    ]

    const angryDenials = [
        "Maybe try listing the places you *do* like??",
        "We're going to be here all day",
        // "Decide on something already homie",
        "Consider the next one an executive decision",
        "If you don't like this next one we're getting McDonalds",
        // "I'm going to starve before you make a decision",
        "Clearly you didn't actually want me to decide",
        // "I'm getting hangry so just pick",
        "Never deciding is a clever weight loss strategy",
        "Okay well why don't *you* choose something and I'll tell you if I like it (I won't)",
        "There's a clever comment on the illusion of choice hiding in this app somewhere"
    ]

    //use count to return more aggravated messages after 10 presses
    let [count, setCount] = useState(0)
    let [place, setPlace] = useState(placeHolder)
    let disabled = props.isLoaded ? false : true
    let buttonMsg = props.isLoaded ? "Pick For Me" : 'Searching for places...'
    let starURL = props.pressed ? '/starB.png' : ''
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

    return(
        <div className="location">
            <div className='location--spacer'></div>
            <div className='location--result'>
                <h1 className='location--result--name' >{place.name}</h1>
                <div className='location--result--rating'>
                    <img src={starURL} className='location--rating--star'/>
                    <span className='location--rating--value'>{place.rating}</span>
                </div>
            </div>
            
            <div className='location--button--pad'>
                <button 
                id='selectorButton' 
                className='location--button'  
                onClick={pickIt} 
                disabled={disabled} >
                    {finalMsg}
                </button>
            </div>
            
            <div id='map' className='map'></div>
        </div>
        
    )
}