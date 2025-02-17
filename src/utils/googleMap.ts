import {locations} from "../constants/locations.ts";

async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 2,
        center: { lat: 35, lng: 5 },
        mapId: 'map',
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
    });

    const closeBtn = document.getElementById('close-overlay')
    const mapOverlay = document.getElementById('map-overlay')
    const mapContent = document.getElementById('map-content')

    closeBtn.addEventListener('click', () => {
        mapContent.innerHTML = "";
        mapOverlay.style.display = "none"
    })

    // Create the markers.
    locations.forEach(({position, title, getContent, year}) => {
        const beachFlagImg = document.createElement('img');
        beachFlagImg.src = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        beachFlagImg.ariaLabel = `marker-${title}`

        const marker = new AdvancedMarkerElement({
            position,
            map,
            content: beachFlagImg,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener('click', () => {
            mapContent.innerHTML = getContent(title, year)
            mapOverlay.style.display = "flex"
        });
    });
}

initMap().then()