import React from "react";
import {Wrapper, Status} from '@googlemaps/react-wrapper'

export default function MapGrabber(props) {
    let placesReturned;
    let map;
    let options ;
    let service;
    let winner;
    let names
    let filteredPlaces = [];
    let winReport;
    let filter = {
        price: 2,
        isOpen: true,
        distance: 3000,
    }
    console.log('mapgrabbing')
    // console.log(window.google)
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
     if(props.isLoaded == false) {   var request = {
            location: locate,
            keyword: 'food',
            type: 'restaurant',
            radius: filter.distance,
        }
        // console.log('here it is')
        // console.log(google.maps.places)
        // console.log('there it was')

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
            getPlaces()
            
        })
        

    } else {
        console.log('location not working')
        map = new google.maps.Map(document.getElementById('map'), options)
    }

    function nearbyCallback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            placesReturned = results
    
            console.log('load complete')

            props.setPlaces(placesReturned)
            props.setIsLoaded(true) 
        }
    }


    return filteredPlaces

}