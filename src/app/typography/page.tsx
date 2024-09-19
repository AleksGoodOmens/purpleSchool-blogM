import { CustomLink, Heading, Like, MinuteTimer, MonthTimer, Paragraph } from '@/components'

function TypographyPage() {
	return (
		<div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<MinuteTimer value={1} />
				<MinuteTimer value={2} />
				<MinuteTimer value={3} />
				<MinuteTimer value={4} />
				<MinuteTimer value={5} />
				<MinuteTimer value={6} />
				<MinuteTimer value={10} />
			</div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<MonthTimer value={1} />
				<MonthTimer value={2} />
				<MonthTimer value={3} />
				<MonthTimer value={4} />
				<MonthTimer value={5} />
				<MonthTimer value={6} />
				<MonthTimer value={10} />
			</div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<Heading tag="h1">large title</Heading>
				<Heading tag="h2">medium title</Heading>
				<Heading tag="h3">small title</Heading>
			</div>
			<div>
				<Paragraph appearance="s">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, dignissimos.
				</Paragraph>
				<Paragraph appearance="m">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, dignissimos.
				</Paragraph>
				<Paragraph appearance="l">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, dignissimos.
				</Paragraph>
			</div>
			<div>
				<CustomLink href="test">link element</CustomLink>
				<CustomLink
					href="test"
					type="arrow">
					link element with arrow
				</CustomLink>
			</div>
			<div>
				<Like>5</Like>
				<Like appearance={'circle'}>Понравилось? Жми</Like>
			</div>
		</div>
	)
}

export default TypographyPage
