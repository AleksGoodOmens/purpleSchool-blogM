import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
	type: 'arrow' | 'basic'
	href: string
}
