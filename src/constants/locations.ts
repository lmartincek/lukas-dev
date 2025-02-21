import {escapeHtml} from "../utils/sanitizeHelper.ts";

interface GeoCoordinates {
    lat: number,
    lng: number,
}
interface IPhoto {
    img: string,
    label: string,
    alt: string,
}
export interface ILocation {
    id: number,
    position: GeoCoordinates,
    title: string,
    year: string,
    photos: IPhoto[],
    getContent: (title: string, year: string, photos: IPhoto[]) => string,
}

function getContentLayer(title: string, year: string, photos: IPhoto[]): string {
    return `
        <h3 class="text-primary text-xl">${title}</h3>
        <h4 class="text-sm font-bold my-2">${year}</h4>
        
        <p class="text-sm mb-5">Story to be told soon...</p>
        
        <h3 class="font-serif text-[1.25rem] tracking-widest mb-2">MEMORIES</h3>
        
        ${photos.map(({ img, alt, label }) => `
            <figure class="overflow-hidden shadow-md mb-5">
                <img 
                    src="${escapeHtml(img)}" 
                    alt="${escapeHtml(alt)}"
                    class="w-full object-cover" 
                    loading="lazy"
                />
                <figcaption class="text-center text-sm py-2">
                    ${escapeHtml(label)}
                </figcaption>
            </figure>
        `).join('')}
    `
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
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
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
        }
    },
    {
        id: 10,
        position: {
            lat: 64.9631,
            lng: -19.0208,
        },
        title: "Iceland",
        year: "August 2023",
        photos: [
            {
                img: 'https://placehold.co/600x400',
                label: 'photo1 - blablabla',
                alt: 'photo1',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo2 - blablabla',
                alt: 'photo2',
            },
            {
                img: 'https://placehold.co/600x400',
                label: 'photo3 - blablabla',
                alt: 'photo3',
            }
        ],
        getContent: function (title: string, year: string, photos: IPhoto[]): string {
            return getContentLayer(title, year, photos)
        }
    }
]