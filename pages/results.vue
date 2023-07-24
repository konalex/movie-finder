<template>
	<div class="container min-h-[50%] h-full">
		<!-- slider with movies -->
		<el-carousel class="h-[calc(90%)] sm:min-h-2/3" heigth="500px" indicator-position="outside" :autoplay="false">
			<el-carousel-item v-for="item in films" :key="item.imdbID" class="h-full">
				<NuxtLink :to="`details/${item.imdbID}`" class="flex flex-col justify-start items-center h-full">
					<!-- moview preview -->
					<DetailsFilm :poster="item.Poster" :title="item.Title" :year="item.Year" />
				</NuxtLink>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script setup>
import { useFilmsStore } from '@/stores/films'

definePageMeta({
	middleware: ['films']
})

const films = computed(() => useFilmsStore().getAllFilms)

</script>

<!-- some visual bugs fixes -->
<style lang="sass">

.el-carousel__container
	height: 100%
	
.el-carousel__indicators
	display: none

</style>