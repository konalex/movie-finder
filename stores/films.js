export const useFilmsStore = defineStore('films', {
	state: () => ({
		films: [],
	}),
	getters: {
		getAllFilms: state => state.films
	},
	actions: {
		setFilmsList(data) {
			this.films = data
		},
		addFilmsInList(data) {
			// adding elements into exciting array with more JS-friendly way
			this.films.push(...data);
		},
		clearFilmsList() {
			// clearing an array with more JS-friendly way
			this.films = this.films.splice(0, this.films.length)
		}
	}
})