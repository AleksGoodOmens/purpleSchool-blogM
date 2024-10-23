import cn from 'classnames'
import { forwardRef, type ForwardedRef } from 'react'

import styles from './CustomInput.module.scss'
import type { CustomInputProps } from './CustomInputProps'

export const CustomInput = forwardRef(function CustomInput(
	{ className, appearance = 'm', ...props }: CustomInputProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<input
			ref={ref}
			className={cn(className, styles['input'], {
				[styles['m']]: appearance === 'm',
				[styles['l']]: appearance === 'l',
			})}
			{...props}
		/>
	)
})
