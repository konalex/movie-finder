const checkResponse = (type) => (/true/).test(type.toLowerCase());

export async function useSearch(page, title) {
	const { data } = await useFetch('https://www.omdbapi.com/', {
		query: {
			s: title,
			page: page,
			type: 'movie',
			apikey: localStorage.getItem('moviefinder_apikey')
		}
	});

	const { Response, Search, totalResults, Error } = data.value;

	const success = checkResponse(Response);

	return { success, data: Search, total: totalResults, error: Error };
}