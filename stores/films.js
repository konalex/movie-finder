export const useFilmsStore = defineStore('films', {
	state: () => ({
		films: [],
		total: 0,
		searchString: ''
	}),
	getters: {
		getAllFilms: state => state.films,
		getFilmById: state => state.films.find(el => el.imdbID),
		getSearchString: state => state.searchString,
		getTotal: state => state.total
	},
	actions: {
		setFilmsList(data) {
			this.films = data
		},
		addFilmsInList(data) {
			this.films.push(...data);
		},
		setSearchString(data) {
			this.searchString = data;
		},
		setTotal(data) {
			this.total = data
		},
		clearFilmsList() {
			this.films = this.films.splice(0, this.films.length)
		}
	}
})