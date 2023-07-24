<template>
	<div class="container mx-auto">
		<!-- movie information -->
		<div v-if="!!Object.keys(film).length" class="flex flex-col w-full sm:w-80 mx-auto">
			<div class="w-full">
				<!-- preview -->
				<DetailsFilm :poster="film.Poster" :title="film.Title" :year="film.Year" :director="film.Director" />
				<!-- accordion with full info -->
				<el-collapse accordion>
					<el-collapse-item name="1" title="Full info">
						<div v-for="(item, key, id) in more" :key="id" class="flex justify-between items-start py-4 border-b-2">
							<!-- rating info -->
							<DetailsRatings v-if="special.includes(key)" :name="key" :data="item" />
							<!-- other info -->
							<template v-else>
								<span class="font-bold mr-2">
									{{ key }}
								</span>
								<span class="text-right">
									{{ item }}
								</span>
							</template>
						</div>
					</el-collapse-item>
				</el-collapse>
			</div>
		</div>
	</div>
</template>

<script setup>
const { app } = useRuntimeConfig()
definePageMeta({
	middleware: [
		function (to, from) {
			if (!to.params.id) return navigateTo('/')
		}
	]
})
// special variables
const special = ['Ratings'];
const except = ['imdbID', 'imdbVotes', 'imdbRating', 'Poster'];

// main data
const film = ref({});
// film id
const id = computed(() => useRoute().params.id)
// get film
await useLazyFetch(app.apiUrl, {
	query: {
		i: id,
		type: app.type,
		apikey: app.apikey
	},
	pick: ['value'],
	onResponse({ response }) {
		film.value = response._data;
	}
});

// computed for data preview
const more = computed(() => {
	const keys = Object.keys(film.value).filter(key => !except.includes(key))
	const result = keys.reduce((acc, element) => {
		return { ...acc, ...{ [element]: film.value[element] } };
	}, {});
	return result;
})

</script>

<style lang="sass">
.el-collapse
	border: none
</style>