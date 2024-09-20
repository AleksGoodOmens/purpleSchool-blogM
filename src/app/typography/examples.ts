import pic from '../../ui/SingleCard/pic.jpg'

export const minuteTimerExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
export const monthTimerExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const headingsExample = [
	{ tag: 'h1' as const, text: 'large title' },
	{ tag: 'h2' as const, text: 'medium title' },
	{ tag: 'h3' as const, text: 'small title' },
]

export const paragraphsExample = [
	{
		appearance: 's' as const,
		text: 'SMALL => Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, dignissimos.',
	},
	{
		appearance: 'm' as const,
		text: 'MEDIUM => Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, dignissimos.',
	},
	{
		appearance: 'l' as const,
		text: 'LARGE => Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, dignissimos.',
	},
]

export const linksExample = [
	{ type: 'arrow' as const, href: '#', text: 'Читать' },
	{ type: 'basic' as const, href: '#', text: 'Читать' },
]

export const LikesExample = [
	{ appearance: 'circle' as const, value: 'Понравилось? Жми', id: '1' },
	{ appearance: 'none' as const, value: 5, id: '2' },
]

export const singleCardsExample = [
	{
		course: 'Front-end',
		duration: 1,
		heading: 'Как работать с CSS Grid',
		img: {
			alt: 'frontEnd course',
			src: pic,
		},
		link: { src: '#', text: 'Читать' },
		paragraph:
			'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
		rating: 4,
		time: 3,
	},
	{
		course: 'Back-end',
		duration: 5,
		heading: 'Как работать с NextJS',
		img: {
			alt: 'Back-end course',
			src: pic,
		},
		link: { src: '#', text: 'Читать' },
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consectetur.',
		rating: 42,
		time: 11,
	},
	{
		course: 'design',
		duration: 1,
		heading: 'Как работать с Figma',
		img: {
			alt: 'design course',
			src: pic,
		},
		link: { src: '#', text: 'Читать' },
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at autem est, magnam doloribus neque!',
		rating: 22,
		time: 6,
	},
]
