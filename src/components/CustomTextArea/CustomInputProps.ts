import type { TextareaHTMLAttributes } from 'react'

export interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	appearance?: 'm' | 'l'
}
