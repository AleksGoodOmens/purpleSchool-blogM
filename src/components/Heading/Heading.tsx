import cn from 'classnames'

import styles from './Heading.module.scss'
import type { HeadingProps } from './Heading.props'

function Heading({ tag, className, children }: HeadingProps) {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles['wrapper'], className)}>{children}</h1>

		default:
			break
	}

	return <div className={cn(styles['wrapper'], className)}>{children}</div>
}

export { Heading }
