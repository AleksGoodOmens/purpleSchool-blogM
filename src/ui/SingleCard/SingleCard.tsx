'use client'

import Image from 'next/image'

import { updateLike } from '@/api'
import { CustomLink, Heading, Like, MinuteTimer, MonthTimer, Paragraph } from '@/components'

import pic from './pic.jpg'
import type { SingleCardProps } from './SingleCard.props'
import styles from './styles.module.scss'

function SingleCard({
	course,
	duration,
	heading,
	link,
	paragraph,
	itemId,
	rating,
	img = { alt: 'no image', src: pic },
	time,
}: SingleCardProps) {
	return (
		<article className={styles['article']}>
			<section className={styles['image']}>
				<Image
					width={300}
					height={300}
					alt={img.alt}
					src={img.src}
				/>
			</section>
			<section className={styles['body']}>
				<div className={styles['body__header']}>
					<MonthTimer value={duration}>{course}</MonthTimer>
					<div>
						<Like
							itemId={itemId}
							changer={updateLike}>
							{rating}
						</Like>
					</div>
				</div>
				<Heading tag="h3">{heading}</Heading>
				<Paragraph appearance="s">{paragraph}</Paragraph>
				<div className={styles['body__footer']}>
					<MinuteTimer value={time} />
					<CustomLink
						href={link.src}
						type="arrow">
						{link.text}
					</CustomLink>
				</div>
			</section>
		</article>
	)
}

export { SingleCard }
