import { notFound } from 'next/navigation'

export const updateLike = async (id: number, rating: number) => {
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({
			rating: rating,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		// eslint-disable-next-line no-console
		.then((json) => console.log(json))
}
export async function getData<T>(path: string): Promise<T> {
	const resp = await fetch(path)

	if (!resp) {
		return notFound()
	}
	const returnedData = await resp.json()
	return returnedData
}
