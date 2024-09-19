import cn from 'classnames'

import styles from './Like.module.scss'
import type { likeProps } from './Like.props'
import LikeIcon from './like.svg'

function Like({ className, children, appearance = 'none', ...props }: likeProps) {
	return (
		<button
			{...props}
			className={cn(styles['btn'], className)}>
			{children}
			<div
				className={cn(styles['icon'], {
					[styles['circle']]: appearance === 'circle',
				})}>
				<LikeIcon />
			</div>
		</button>
	)
}

export { Like }
