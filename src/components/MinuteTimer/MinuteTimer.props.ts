import type { DetailsHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react'

export interface MinuteTimerProps extends DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>>, PropsWithChildren {
	value: number
}
