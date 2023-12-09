import React, {useState}from 'react'
import Popup from 'reactjs-popup'

export default function Filters(props) {

    function applyFilters() {
        props.setFilters({
            distance:document.getElementById('filter--distance').value,
            price:document.getElementById('filter--distance').value,
            
        })

        console.log(props.filters)
        props.setIsLoaded(false)
        props.setPressed(false)
        
    }

    
    const [currentFilters, setCurrentFilters] = useState({
        price: 2,
        distance:2,
        
    })

    function handleChange(e) {
        setCurrentFilters(
            {
            
            distance:document.getElementById('filter--distance').value,
            price:document.getElementById('filter--price').value
        }
    )
        
        
    }
    return(
        <div className='filter'>
            <Popup trigger={<a className='filter--toggle'>
                <img className='filter--img' src='/filter.svg'></img>
            </a>}>
                <form className='filter--window'>
                    <span className='filter--item'>
                        <p>Distance (mi): {currentFilters.distance}</p>
                        <input type='range' id='filter--distance' name="distance" min='1' max="20" defaultValue={2} onChange={handleChange}/>
                    </span>
                        <br></br>

                    <span className='filter--item'>
                        <p>Price Level: {currentFilters.price}</p>
                        <input type='range' id='filter--price' min='1' max="4" defaultValue={2} onChange={handleChange}/>
                    </span>
                    <br></br>
                    <button className='filter--apply' onClick={applyFilters}>Apply</button>
                </form>
            </Popup>
        </div>
    )
}