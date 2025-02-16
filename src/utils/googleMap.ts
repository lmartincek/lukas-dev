interface ILocation {
    id: number,
    position: GeoCoordinates,
    title: string,
    getContent: () => string | HTMLElement
}

interface GeoCoordinates {
    lat: number,
    lng: number,
}

const locations: ILocation[] = [
    {
        id: 1,
        position: {
            lat: 45.840196,
            lng: 15.964331
        },
        title: "Zagreb",
        getContent: () => `
            <h3 class="text-primary text-xl">zagreb</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/640px-Zagreb_%2829255640143%29.jpg" style="width:100%;" alt="Image">
            <p>A more detailed info window with an image.</p>
        `
    },
    {
        id: 2,
        position: {
            lat: 48.1486,
            lng: 17.1077
        },
        title: "Bratislava",
        getContent: () => `
            <h3 class="text-primary text-xl">bratislava</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Slovakia_bratislava.jpg/800px-Slovakia_bratislava.jpg" style="width:100%;" alt="Image">
            <p>A more detailed info window with an image.</p>
        `
    }
]

async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 4,
        center: { lat: 48.765587, lng: 19.092877 },
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
    locations.forEach(({id, position, title, getContent}) => {
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
            mapContent.innerHTML = getContent()
            mapOverlay.style.display = "flex"
        });
    });
}

initMap().then()