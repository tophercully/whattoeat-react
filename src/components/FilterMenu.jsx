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
    return(
        <div >
            <Popup trigger={<button className='filter--toggle'>Filters</button>}>
                <div className='filter--window'>
                    <form>
                    <input type='range' id='filter--distance' name="distance" min='1' max="20" defaultValue={2}/>
                    <input type='range' id='filter--price' min='1' max="4" defaultValue={2}/>
                    <button className='filter--apply' onClick={applyFilters}>Apply</button>
                    </form>
                </div>
            </Popup>
        </div>
    )
}