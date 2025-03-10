interface GeoCoordinates {
	lat: number;
	lng: number;
}

export interface IPhoto {
	img: string;
	label: string;
	alt: string;
}
export interface ILocation {
	id: number;
	position: GeoCoordinates;
	title: string;
	year: string;
	photos: IPhoto[];
}

export const locations: ILocation[] = [
	{
		id: 1,
		position: {
			lat: 37.7412,
			lng: -25.6756,
		},
		title: "Azores",
		year: "July 2022 - October 2022",
		photos: [
			{
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
	},
	{
		id: 2,
		position: {
			lat: 48.1486,
			lng: 17.1077,
		},
		year: "1996 - xxxx",
		title: "Slovakia",
		photos: [
			{
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
	},
	{
		id: 3,
		position: {
			lat: 15.87,
			lng: 100.9925,
		},
		title: "Thailand",
		year: "2022 - 2024",
		photos: [
			{
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
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
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
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
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
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
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
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
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
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
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
	},
	{
		id: 9,
		position: {
			lat: 43.076,
			lng: -107.2903,
		},
		title: "USA, Wyoming",
		year: "2018 - 2019",
		photos: [
			{
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
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
				img: "https://placehold.co/600x400",
				label: "photo1 - blablabla",
				alt: "photo1",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo2 - blablabla",
				alt: "photo2",
			},
			{
				img: "https://placehold.co/600x400",
				label: "photo3 - blablabla",
				alt: "photo3",
			},
		],
	},
];
