import cn from 'classnames'

import { properMonthEnding } from '@/utils'

import styles from './MonthTimer.module.scss'
import type { MonthTimerProps } from './MonthTimer.props'

function MonthTimer({ value, className, children }: MonthTimerProps) {
	return (
		<div className={cn(styles['wrapper'], className)}>
			{children} - {properMonthEnding(value)}
		</div>
	)
}

export { MonthTimer }
