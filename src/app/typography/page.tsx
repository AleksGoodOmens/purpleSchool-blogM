import { CustomLink, Heading, Like, MinuteTimer, MonthTimer, Paragraph } from '@/components'
import { SingleCard } from '@/ui'

import pic from '../../ui/SingleCard/pic.jpg'

const minuteTimerExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const monthTimerExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const headingsExample = [
	{ tag: 'h1' as const, text: 'large title' },
	{ tag: 'h2' as const, text: 'medium title' },
	{ tag: 'h3' as const, text: 'small title' },
]

const paragraphsExample = [
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

const linksExample = [
	{ type: 'arrow' as const, href: '#', text: 'Читать' },
	{ type: 'basic' as const, href: '#', text: 'Читать' },
]

const LikesExample = [
	{ appearance: 'circle' as const, value: 'Понравилось? Жми' },
	{ appearance: 'none' as const, value: 5 },
]

const singleCardsExample = [
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

function TypographyPage() {
	return (
		<div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				{minuteTimerExample.map((item) => (
					<MinuteTimer
						key={item}
						value={item}
					/>
				))}
			</div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				{monthTimerExample.map((item) => (
					<MonthTimer
						key={item}
						value={item}
					/>
				))}
			</div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				{headingsExample.map((item) => (
					<Heading
						key={item.tag}
						tag={item.tag}>
						{item.text}
					</Heading>
				))}
			</div>
			<div>
				{paragraphsExample.map((item) => (
					<Paragraph
						key={item.appearance}
						appearance={item.appearance}>
						{item.text}
					</Paragraph>
				))}
			</div>
			<div>
				{linksExample.map((item) => (
					<CustomLink
						key={item.type}
						href={item.href}
						type={item.type}>
						{item.text}
					</CustomLink>
				))}
			</div>
			<div>
				{LikesExample.map((item) => (
					<Like
						key={item.appearance}
						appearance={item.appearance}>
						{item.value}
					</Like>
				))}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
				{singleCardsExample.map((item) => (
					<SingleCard
						key={item.course}
						course={item.course}
						duration={item.duration}
						heading={item.heading}
						img={item.img}
						link={item.link}
						paragraph={item.paragraph}
						rating={item.rating}
						time={item.time}
					/>
				))}
			</div>
		</div>
	)
}

export default TypographyPage
