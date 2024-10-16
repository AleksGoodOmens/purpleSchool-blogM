import { SingleCard } from '@/ui'

import styles from './cards.module.scss'
import { singleCardsExample } from '../../(routes)/typography/examples'

function Cards() {
	return (
		<div className={styles['content']}>
			{singleCardsExample.map((item) => (
				<SingleCard
					key={item.course}
					course={item.course}
					duration={item.duration}
					heading={item.heading}
					img={item.img}
					link={item.link}
					paragraph={item.paragraph}
					rating={item.rating}
					time={item.time}
					itemId={item.id}
				/>
			))}
		</div>
	)
}

export { Cards }
