'use client'

import Image from 'next/image'

import { updateLike } from '@/api'
import { Like, MinuteTimer, MonthTimer, Paragraph } from '@/components'

import Pic from './placeHolder.png'
import styles from './Stats.module.scss'
import type { StatsProps } from './Stats.props'

function Stats({ id, month, minutes, likes, courseName, text }: StatsProps) {
	return (
		<div className={styles['wrapper']}>
			<div className={styles['head']}>
				<MonthTimer value={month}>{courseName}</MonthTimer> -
				<MinuteTimer value={minutes} /> -
				<Like
					appearance="none"
					itemId={id}
					changer={updateLike}>
					{likes}
				</Like>
			</div>
			<Image
				className={styles['img']}
				alt="placeholder"
				src={Pic}
				width={280}
				height={220}
			/>
			<Paragraph appearance="m">
				{text} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, quod iusto sunt accusantium, delectus
				dolores perferendis eaque sapiente ut nam fugiat labore perspiciatis neque dolorum? Mollitia nihil rerum
				obcaecati sunt voluptatum unde nam facere modi molestiae, sed nostrum repellat iste.
			</Paragraph>
		</div>
	)
}

export { Stats }
