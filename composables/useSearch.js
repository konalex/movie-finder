// check prop, because API answer has string with 'boolean' value
const checkResponse = (type) => (/true/).test(type.toLowerCase());

// simple API fetch
export async function useSearch(page, title) {
	const { app } = useRuntimeConfig()

	const { data } = await useFetch(app.apiUrl, {
		query: {
			s: title,
			page: page,
			type: app.type,
			apikey: app.apikey
		},
		server: true
	});

	const { Response, Search, Error } = data.value;

	const success = checkResponse(Response);

	// renaming values with more comfortable names
	return { success, data: Search, error: Error };
}