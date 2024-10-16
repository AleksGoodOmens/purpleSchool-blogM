import cn from 'classnames'

import type { CustomTextAreaProps } from './CustomInputProps'
import styles from './CustomTextArea.module.scss'

function CustomTextArea({ className, appearance = 'm', ...props }: CustomTextAreaProps) {
	return (
		<textarea
			className={cn(className, styles['textarea'], {
				[styles['m']]: appearance === 'm',
				[styles['l']]: appearance === 'l',
			})}
			{...props}
		/>
	)
}

export { CustomTextArea }
