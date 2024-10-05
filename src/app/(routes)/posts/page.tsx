import { getData } from '@/api'
import { API } from '@/api/api'
import { SingleCard } from '@/ui'

import styles from './styles.module.scss'

export interface IPost {
	userId: number
	Id: number
	title: string
	body: string
}
async function PostsPage() {
	const posts = await getData<IPost[]>(API.posts)

	return (
		<div className={styles['content']}>
			{posts.map((post) => (
				<SingleCard
					key={post.Id + post.userId + post.title}
					itemId={post.Id}
					course="test"
					duration={post.Id}
					heading={post.title}
					img={{ alt: post.title, src: '' }}
					paragraph={post.body}
					rating={post.userId}
					time={post.userId}
					link={{ src: post.title, text: post.title }}
				/>
			))}
		</div>
	)
}

export default PostsPage
