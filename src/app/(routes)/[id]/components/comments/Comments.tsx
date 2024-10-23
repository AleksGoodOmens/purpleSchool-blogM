'use client'

import { Heading, Paragraph } from '@/components'

import styles from './Comments.module.scss'
import type { CommentsProps } from './Comments.props'

function Comments({ comments }: CommentsProps) {
	return (
		<div className={styles['wrapper']}>
			<Heading
				className={styles['title']}
				tag="h2">
				Комментарии
			</Heading>

			<div>
				{comments.map((c) => {
					return (
						<article
							className={styles['comment']}
							key={c.id}>
							<span className={styles['name']}>{c.name}</span> - <span className={styles['email']}>{c.email}</span>
							<Paragraph
								className={styles['text']}
								appearance="m">
								{c.body}
							</Paragraph>
						</article>
					)
				})}
			</div>
		</div>
	)
}

export { Comments }
