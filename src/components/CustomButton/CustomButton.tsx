import cn from 'classnames'

import styles from './CustomButton.module.scss'
import type { CustomButtonProps } from './CustomButton.props'

function CustomButton({ className, children, ...props }: CustomButtonProps) {
	return (
		<button
			className={cn(styles['button'], className)}
			{...props}>
			{children}
		</button>
	)
}

export { CustomButton }
