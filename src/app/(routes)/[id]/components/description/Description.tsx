'use client'

import { updateLike } from '@/api'
import { Heading, Like, Paragraph } from '@/components'

import styles from './Description.module.scss'
import type { DescriptionProps } from './Description.props'

function Description({ title, children }: DescriptionProps) {
	return (
		<div className={styles['wrapper']}>
			<Heading
				className={styles['title']}
				tag="h2">
				{title.split(' ').slice(0, 4).join(' ')}?
			</Heading>
			<Paragraph appearance="m">
				{children} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, architecto. Animi alias omnis rem
				aspernatur deleniti veniam magnam voluptate blanditiis quia autem, numquam laborum? Ad placeat quis quidem
				dolore error!
			</Paragraph>
			<Like
				itemId={1}
				appearance="circle"
				changer={updateLike}>
				Понравилось? Жми
			</Like>
		</div>
	)
}

export { Description }
