import type { DetailsHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react'

export interface ParagraphProps extends DetailsHTMLAttributes<HTMLAttributes<HTMLParagraphElement>>, PropsWithChildren {
	appearance: 's' | 'm' | 'l'
}
