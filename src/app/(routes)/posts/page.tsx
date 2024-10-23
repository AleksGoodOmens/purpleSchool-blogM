import { getData } from '@/api'
import { API } from '@/api/api'
import type { IPost } from '@/interfaces'
import { SingleCard } from '@/ui'

import styles from './styles.module.scss'

async function PostsPage() {
	const posts = await getData<IPost[]>(API.posts)

	return (
		<div className={styles['content']}>
			{posts.map((post) => (
				<SingleCard
					key={post.id + post.userId + post.title}
					itemId={post.id}
					course="test"
					duration={post.id}
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
