import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export interface likeProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
	appearance?: 'circle' | 'none'
	id: string
	changer: (id: string, rating: number) => Promise<void>
}
