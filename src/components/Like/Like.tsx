'use client'
import cn from 'classnames'
import { useState } from 'react'

import styles from './Like.module.scss'
import type { likeProps } from './Like.props'
import LikeIcon from './like.svg'

function Like({ className, itemId, changer, children, appearance = 'none', ...props }: likeProps) {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive((prev) => !prev)
		changer(itemId, 1)
	}
	return (
		<>
			<span className={styles['children']}>{children}</span>
			<button
				{...props}
				onClick={handleClick}
				className={cn(styles['btn'], className, {
					[styles['active']]: active,
					[styles['circle']]: appearance === 'circle',
				})}>
				<LikeIcon />
			</button>
		</>
	)
}

export { Like }
