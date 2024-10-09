import type { InputHTMLAttributes } from 'react'

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
	appearance?: 'm' | 'l'
}
