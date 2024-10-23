import cn from 'classnames'

import styles from './Heading.module.scss'
import type { HeadingProps } from './Heading.props'

function Heading({ tag, className, children }: HeadingProps) {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles['wrapper'], styles[tag], className)}>{children}</h1>
		case 'h2':
			return <h2 className={cn(styles['wrapper'], styles[tag], className)}>{children}</h2>
		case 'h3':
			return <h3 className={cn(styles['wrapper'], styles[tag], className)}>{children}</h3>

		default:
			return <></>
	}
}

export { Heading }
