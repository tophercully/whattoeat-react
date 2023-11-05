let places;
let locate;
let map;
let options ;
let bounds ;
let infowindow;
let currentInfoWindow;
let service;
let infoPane;
let winner;
let filteredPlaces = [];
let winReport;

let filter = {
    price: 2,
    isOpen: true,
    distance: 2000,
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
  }

async function initMap() {
    // bounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;
    
    locate = {
        lat:0.0,
        lng:0.0
    }
    options = {
        center: locate,
        zoom: 9,
    }



    if(navigator.geolocation) {
        console.log('location working!')
        navigator.geolocation.getCurrentPosition((loc) => {
            locate.lat = loc.coords.latitude
            locate.lng = loc.coords.longitude
            map = new google.maps.Map(document.getElementById('map'), options)
            getPlaces()
            
        })
        // bounds.extend(locate)
        

    } else {
        console.log('location not working')
        map = new google.maps.Map(document.getElementById('map'), options)
    }

    // filterPlaces()

    
}

function getPlaces() {
    var request = {
        location: locate,
        keyword: 'food',
        type: 'restaurant',
        radius: filter.distance,
    }
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
}

function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        places = results
        let names = places.map(a => a.name)
        

        for(let i = 0; i < 20; i++) {
            var openStatus = places[i].opening_hours.isOpen
            if(places[i].price_level <= filter.price) {
                    filteredPlaces.push(places[i])
                }
        }

        winner = filteredPlaces[Math.round(randomInt(0, filteredPlaces.length))]

        
        winReport = {
            name:winner.name,
            price:winner.price_level+'/4',
            rating:winner.rating,
        }
        console.log(winReport)

        // document.getElementById('selectorButton').disabled = false 
        
    }
}


// export default winReport




