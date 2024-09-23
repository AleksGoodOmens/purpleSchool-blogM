import cn from 'classnames'

import { CustomLink, Heading } from '@/components'

import { Cards } from './components/Cards/Cards'
import styles from './page.module.scss'

export default function Home() {
	return (
		<div className={cn(styles.page, 'container')}>
			<Heading tag="h1">Home Page</Heading>
			<CustomLink
				type="arrow"
				href={'/typography'}>
				to Typography page
			</CustomLink>
			<CustomLink
				type="arrow"
				href={'/posts'}>
				to posts page
			</CustomLink>
			<Cards />
		</div>
	)
}
