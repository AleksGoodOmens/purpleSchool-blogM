import type { StaticImageData } from 'next/image'

export interface SingleCardProps {
	itemId: number
	img: {
		src: string | StaticImageData
		alt: string
	}
	rating: number
	course: string
	duration: number
	heading: string
	paragraph: string
	time: number
	link: {
		src: string
		text: string
	}
}
