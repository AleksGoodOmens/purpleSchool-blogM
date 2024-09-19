import cn from 'classnames'

import styles from './Heading.module.scss'
import type { HeadingProps } from './Heading.props'

function Heading({ tag, className, children }: HeadingProps) {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles['wrapper'], styles[tag], className)}>{children}</h1>
		case 'h2':
			return <h1 className={cn(styles['wrapper'], styles[tag], className)}>{children}</h1>
		case 'h3':
			return <h1 className={cn(styles['wrapper'], styles[tag], className)}>{children}</h1>

		default:
			return <></>
	}
}

export { Heading }
