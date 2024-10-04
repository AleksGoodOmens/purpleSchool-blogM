import { getData } from '@/api'
import { API } from '@/api/api'

import type { IPost } from '../posts/page'

export async function generateStaticParams() {
	const posts = await getData<{ id: string }[]>(API.posts)
	return posts.map((post) => ({
		id: post.id.toString(),
	}))
}
async function DetailsPage({ params }: { params: { id: string } }) {
	const pageData = await getData<IPost>(API.posts + '/' + params.id)

	return <div>{pageData.title}</div>
}

export default DetailsPage
