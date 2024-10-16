import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

export interface DescriptionProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		PropsWithChildren {
	title: string
}
