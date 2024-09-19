import cn from 'classnames'
import Link from 'next/link'

import ArrowIcon from './arrow.svg'
import styles from './CustomLink.module.scss'
import type { CustomLinkProps } from './CustomLink.props'

function CustomLink({ className, children, href, type = 'basic', ...props }: CustomLinkProps) {
	return (
		<Link
			href={href}
			{...props}
			className={cn(styles['link'], className, {
				[styles['accent']]: type === 'arrow',
			})}>
			{children}
			{type === 'arrow' && <ArrowIcon />}
		</Link>
	)
}

export { CustomLink }
