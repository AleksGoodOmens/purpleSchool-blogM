import cn from 'classnames'

import { properMinutesEnding } from '@/utils'

import styles from './MinuteTimer.module.scss'
import type { MinuteTimerProps } from './MinuteTimer.props'

function MinuteTimer({ value, className, children }: MinuteTimerProps) {
	return (
		<div className={cn(styles['wrapper'], className)}>
			{children}
			{properMinutesEnding(value)}
		</div>
	)
}

export { MinuteTimer }
