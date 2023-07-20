<template>
	<div class="container mx-auto">
		<!-- back button -->
		<NuxtLink to="/" class="w-1/2 mx-auto flex">
			<el-button class="w-full my-4" type="danger">
				To home page
			</el-button>
		</NuxtLink>
		<!-- movie information -->
		<div v-if="film.Poster" class="flex flex-col w-full sm:w-80 mx-auto">
			<div class="w-full">
				<!-- preview -->
				<DetailsFilm
					:poster="film.Poster"
					:title="film.Title"
					:year="film.Year"
					:director="film.Director"
				/>
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
definePageMeta({
  middleware: 'details'
})
// special variables
const special = ['Ratings'];
const except = ['imdbID', 'imdbVotes', 'imdbRating', 'Poster'];

// main data
const film = ref({});
// film id
const id = computed(() => useRoute().params.id)
// get film
onMounted(async () => {
	const { data } = await useFetch('https://www.omdbapi.com/', {
		query: {
			i: id,
			type: 'movie',
			apikey: '68c2f680'
		}
	});
	film.value = data.value;
})

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