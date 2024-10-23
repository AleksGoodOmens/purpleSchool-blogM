import cn from 'classnames'

import styles from './Paragraph.module.scss'
import type { ParagraphProps } from './Paragraph.props'

function Paragraph({ className, children, appearance }: ParagraphProps) {
	return (
		<p
			className={cn(styles['wrapper'], className, {
				[styles['s']]: appearance === 's',
				[styles['m']]: appearance === 'm',
				[styles['l']]: appearance === 'l',
			})}>
			{children}
		</p>
	)
}

export { Paragraph }
