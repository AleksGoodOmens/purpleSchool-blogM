import cn from 'classnames'
import type { ForwardedRef } from 'react'
import { forwardRef } from 'react'

import type { CustomTextAreaProps } from './CustomInputProps'
import styles from './CustomTextArea.module.scss'

export const CustomTextArea = forwardRef(function CustomTextArea(
	{ className, appearance = 'm', ...props }: CustomTextAreaProps,
	ref: ForwardedRef<HTMLTextAreaElement>
) {
	return (
		<textarea
			ref={ref}
			className={cn(className, styles['textarea'], {
				[styles['m']]: appearance === 'm',
				[styles['l']]: appearance === 'l',
			})}
			{...props}
		/>
	)
})
