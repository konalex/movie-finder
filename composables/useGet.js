// Function to get movie by ID
export async function useGet(id) {
	const { app } = useRuntimeConfig()

	const { data } = await useFetch(app.apiUrl, {
		query: {
			i: id,
			type: app.type,
			apikey: app.apikey
		},
		server: true
	});
	// data in raw view
	return data;
}