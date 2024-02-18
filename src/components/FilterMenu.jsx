import { useLocalStorage } from '@uidotdev/usehooks'
import Popup from 'reactjs-popup'

export default function Filters(props) {

    const {filters, setFilters, setIsLoaded, setPressed} = props

    function applyFilters() {
        setFilters({
            distance:document.getElementById('filter--distance').value,
            price:document.getElementById('filter--price').value,
        })
        console.log(props.filters)
        setIsLoaded(false)
        setPressed(true)
    }
    
    const [currentFilters, setCurrentFilters] = useLocalStorage('currentFilters', filters)

    function handleChange(e) {
        e.preventDefault()
        setCurrentFilters(
            {
            ...currentFilters,
            distance:document.getElementById('filter--distance').value,
            price:document.getElementById('filter--price').value
        }
    )
    }
    return(
        <div className='filter'>
            <label className='filter--toggle' htmlFor='filter--checkbox'>
                {/* <img className='filter--img' src='/menu.svg'></img> */}
            </label>
            <input className='filter--checkbox' id='filter--checkbox' type='checkbox' defaultChecked={false}></input>
            <form className='filter--window'>
                <span className='filter--item'>
                    <p>Distance (mi): {currentFilters.distance}</p>
                    <input className='filter-range' type='range' id='filter--distance' min='1' max="20" defaultValue={currentFilters.distance} onChange={handleChange}/>
                </span>
                <br></br>
                <span className='filter--item'>
                    <p>Price Level: {currentFilters.price}</p>
                    <input className='filter-range' type='range' id='filter--price' min='1' max="4" defaultValue={currentFilters.price} onChange={handleChange}/>
                </span>
                <br></br>
                <button className='filter--apply' onClick={applyFilters}>Apply</button>
            </form>
            
        </div>
    )
}