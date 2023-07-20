<template>
	<div class="container h-full">
		<!-- slider with movies -->
		<el-carousel class="h-[calc(90%)] sm:min-h-2/3" heigth="500px" indicator-position="outside" :autoplay="false">
			<el-carousel-item v-for="item in films" :key="item.imdbID" class="h-full">
				<NuxtLink :to="`details/${item.imdbID}`" class="flex flex-col justify-start items-center h-full">
					<!-- moview preview -->
					<DetailsFilm :poster="item.Poster" :title="item.Title" :year="item.Year" />
				</NuxtLink>
			</el-carousel-item>
		</el-carousel>
		<div class="flex mt-4">
			<!-- back button -->
			<NuxtLink to="/" class="w-1/2">
				<el-button class="w-full" type="danger">
					Back
				</el-button>
			</NuxtLink>
			<!-- load more button -->
			<el-form
				label-width="120px"
				label-position="top"
				class="w-1/2 z-20"
			>
				<el-button class="w-full ml-1 flex items-center" type="primary" :disabled="available || processing" @click.stop="getMore">
					More
				</el-button>
			</el-form>
		</div>
	</div>
</template>

<script setup>
import { useFilmsStore } from '@/stores/films'
const store = useFilmsStore()

const films = computed(() => store.getAllFilms)
const total = computed(() => store.getTotal)
const title = store.getSearchString;

const available = computed(() => (page * 10) < total.value)

const page = ref(2)
const processing = ref(false)

async function getMore() {
	if(processing.value) return
	if(!available) return
	processing.value = true

	const { success, data } = await useSearch(page.value, title)

	if(success) {
		store.addFilmsInList(data)
		page.value = page.value + 1
	}

	processing.value = false;
}

onBeforeUnmount(() => {
	// clear search string for bugs preventing
	store.setSearchString('')
})

</script>

<!-- some visual bugs fixes -->
<style lang="sass">

.el-carousel__container
	height: 100%
	
.el-carousel__indicators
	display: none

</style>