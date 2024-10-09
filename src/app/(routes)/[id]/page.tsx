import { getData } from '@/api'
import { API } from '@/api/api'
import { Heading } from '@/components'
import type { IPost, CommentModel } from '@/interfaces'

import { Comments } from './components/comments/Comments'
import { Description } from './components/description/Description'
import { Form } from './components/form/Form'
import { Stats } from './components/stats/Stats'

export async function generateStaticParams() {
	const posts = await getData<{ id: string }[]>(API.posts)

	return posts.map((post) => ({
		id: post.id.toString(),
	}))
}
async function DetailsPage({ params }: { params: { id: string } }) {
	const posts = await getData<IPost>(API.posts + '/' + params.id)
	const comments = await getData<CommentModel[]>(API.comments + `?postId=${posts.id}`)

	return (
		<div>
			<Heading tag="h1">{posts.title}</Heading>
			<Stats
				month={posts.id}
				minutes={posts.userId}
				likes={posts.id}
				id={posts.id}
				courseName={`Test ${posts.userId}`}
				text={posts.body}
			/>
			<Description title={posts.title}>{posts.body}</Description>
			{comments && <Comments comments={comments} />}
			<Form />
		</div>
	)
}

export default DetailsPage
