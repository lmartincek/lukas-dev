interface ILocation {
    id: number,
    position: GeoCoordinates,
    title: string,
    year: string,
    getContent: (title: string, year: string) => string | HTMLElement
}

interface GeoCoordinates {
    lat: number,
    lng: number,
}

export const locations: ILocation[] = [
    {
        id: 1,
        position: {
            lat: 37.7412,
            lng: -25.6756
        },
        title: "Azores",
        year: "July 2022 - October 2022",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 2,
        position: {
            lat: 48.1486,
            lng: 17.1077
        },
        year: "1996 - xxxx",
        title: "Slovakia",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 3,
        position: {
            lat: 15.8700,
            lng: 100.9925,
        },
        title: "Thailand",
        year: "2022 - 2024",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 4,
        position: {
            lat: 14.0583,
            lng: 108.2772,
        },
        title: "Vietnam",
        year: "2023",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 5,
        position: {
            lat: -15.3767,
            lng: 166.9592,
        },
        title: "Vanuatu",
        year: "Feb 2024",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 6,
        position: {
            lat: 7.8731,
            lng: 80.7718,
        },
        title: "Sri Lanka",
        year: "Feb 2022 - May 2022",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 7,
        position: {
            lat: 20.5937,
            lng: 78.9629,
        },
        year: "October 2023",
        title: "India",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 8,
        position: {
            lat: 15.7835,
            lng: -90.2308,
        },
        title: "Guatemala",
        year: "June 2024",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    },
    {
        id: 9,
        position: {
            lat: 43.0760,
            lng: -107.2903,
        },
        title: "USA, Wyoming",
        year: "2018 - 2019",
        getContent: function (title, year) {
            return `
                <h3 class="text-primary text-xl pb-2">${title}</h3>
                <h4 class="text-sm py-2">${year}</h4>
                <img src="https://placehold.co/600x400" style="width:100%;" alt="Image">
                <p>Story to be told soon...</p>
            `
        }
    }
]