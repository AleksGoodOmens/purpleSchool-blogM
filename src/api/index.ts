export const updateLike = async (id: string, rating: number) => {
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
