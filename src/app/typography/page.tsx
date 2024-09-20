'use client'
import { updateLike } from '@/api'
import { CustomLink, Heading, Like, MinuteTimer, MonthTimer, Paragraph } from '@/components'
import { SingleCard } from '@/ui'

import {
	headingsExample,
	LikesExample,
	linksExample,
	minuteTimerExample,
	monthTimerExample,
	paragraphsExample,
	singleCardsExample,
} from './examples'

function TypographyPage() {
	return (
		<div className="container">
			<header>
				<Heading tag="h1">Typography page</Heading>
				<CustomLink
					type="arrow"
					href="/">
					go to home Page
				</CustomLink>
			</header>
			<div style={{ display: 'grid', gap: '2rem' }}>
				<div style={{ display: 'flex', gap: '1rem', padding: '3rem 0 0 0', flexWrap: 'wrap' }}>
					{minuteTimerExample.map((item) => (
						<MinuteTimer
							key={item}
							value={item}
						/>
					))}
				</div>
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
					{monthTimerExample.map((item) => (
						<MonthTimer
							key={item}
							value={item}
						/>
					))}
				</div>
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
						<div key={item.appearance}>
							<Like
								id={item.id}
								changer={updateLike}
								appearance={item.appearance}>
								{item.value}
							</Like>
						</div>
					))}
				</div>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
						gap: '2rem',
					}}>
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
		</div>
	)
}

export default TypographyPage
