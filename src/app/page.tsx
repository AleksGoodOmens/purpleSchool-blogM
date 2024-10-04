import cn from 'classnames'

import { CustomLink, Heading } from '@/components'

import styles from './page.module.scss'
import Posts from './ui/posts/Posts'

export default function Home() {
	return (
		<div className={cn(styles.page, 'container')}>
			<Heading tag="h1">Home Page</Heading>
			<CustomLink
				type="arrow"
				href={'/typography'}>
				to Typography page
			</CustomLink>
			<Posts />
		</div>
	)
}
