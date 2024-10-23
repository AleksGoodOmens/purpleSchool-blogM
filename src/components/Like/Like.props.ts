import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export interface likeProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
	appearance?: 'circle' | 'none'
	itemId: number
	changer: (id: number, rating: number) => Promise<void>
}
