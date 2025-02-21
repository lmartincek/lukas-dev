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

    const closeBtn: HTMLElement | null = document.getElementById('close-overlay')
    const mapOverlay: HTMLElement | null = document.getElementById('map-overlay')
    const mapContent: HTMLElement | null = document.getElementById('map-content')

    if (closeBtn && mapOverlay && mapContent) {
        closeBtn.addEventListener('click', (): void => {
            mapContent.innerHTML = "";
            mapOverlay.style.display = "none"
        })

        // Create the markers.
        locations.forEach(({position, title, getContent, year, photos}): void => {
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
                mapContent.innerHTML = getContent(title, year, photos)
                mapOverlay.style.display = "flex"
            });
        });
    }
}

initMap().then()