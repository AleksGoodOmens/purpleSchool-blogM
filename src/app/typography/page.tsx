import { MinuteTimer, MonthTimer } from '@/components'

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
		</div>
	)
}

export default TypographyPage
