import type { DetailsHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react'

export interface HeadingProps extends DetailsHTMLAttributes<HTMLAttributes<HTMLHeadingElement>>, PropsWithChildren {
	tag: 'h1' | 'h2' | 'h3' | 'h4'
}
