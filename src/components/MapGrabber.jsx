
export default function MapGrabber(props) {
    let placesReturned;
    let map;
    let options;
    let service;
    let filterVals = {
        price: props.filters.price,
        isOpen: true,
        distance: props.filters.distance*1.60934*1000,
    }
    console.log('filter', filterVals)
    console.log('mapgrabbing')
    var locate = {
        lat:0.0,
        lng:0.0
    }

    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
    }

    function getPlaces() {
        console.log(props.isLoaded, 'is loaded and getting places')
     if(props.isLoaded != true) {   var request = {
            location: locate,
            keyword: 'food',
            type: 'restaurant',
            radius: filterVals.distance,
        }

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, nearbyCallback);}
    }

    if(navigator.geolocation) {
        console.log('location working!')
        navigator.geolocation.getCurrentPosition((loc) => {
            locate.lat = loc.coords.latitude
            locate.lng = loc.coords.longitude
            map = new google.maps.Map(document.getElementById('map'), {
                center: locate,
                zoom: 9,
            })
            console.log(props.isLoaded, 'is loaded about to get places')
            getPlaces()
            
        })
        

    } else {
        console.log('location not working')
        map = new google.maps.Map(document.getElementById('map'), options)
    }

    function nearbyCallback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            placesReturned = results
            console.log(placesReturned)
            console.log('load complete')

            props.setPlaces(placesReturned)
            props.setIsLoaded(true) 
        }
    }
}