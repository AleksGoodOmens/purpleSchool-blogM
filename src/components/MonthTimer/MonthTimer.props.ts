import type { DetailsHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react'

export interface MonthTimerProps extends DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>>, PropsWithChildren {
	value: number
}
