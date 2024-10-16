import type { DetailedHTMLProps, HTMLAttributes } from 'react'

import type { CommentModel } from '@/interfaces'

export interface CommentsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	comments: CommentModel[]
}
