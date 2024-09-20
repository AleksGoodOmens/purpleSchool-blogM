'use client'
import cn from 'classnames'
import { useState } from 'react'

import styles from './Like.module.scss'
import type { likeProps } from './Like.props'
import LikeIcon from './like.svg'

function Like({ className, id, changer, children, appearance = 'none', ...props }: likeProps) {
	const [active, setActive] = useState(false)

	const handlerClick = () => {
		setActive(!active)
		changer(id, 1)
	}
	return (
		<>
			<span>{children}</span>
			<button
				{...props}
				onClick={handlerClick}
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
