import cn from 'classnames'

import styles from './CustomInput.module.scss'
import type { CustomInputProps } from './CustomInputProps'

function CustomInput({ className, appearance = 'm', ...props }: CustomInputProps) {
	return (
		<input
			className={cn(className, styles['input'], {
				[styles['m']]: appearance === 'm',
				[styles['l']]: appearance === 'l',
			})}
			{...props}
		/>
	)
}

export { CustomInput }
