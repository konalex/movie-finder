<template>
	<el-container class="container mx-auto h-screen relative">
		<el-header class="flex flex-col sm:flex-row w-full items-end mt-4" height="auto">
			<!-- Main 'logo' -->
			<NuxtLink to="/" class="w-full" id="header-title">
				<h1 class="text-5xl font-semibold text-center">
					<span class="text-sky-600 -mr-1">
						Movie
					</span>
					<span class="text-amber-400 -ml-1">
						Finder
					</span>
				</h1>
			</NuxtLink>
			<div class="flex items-end justify-center absolute">
				<!-- new button -->
				<NuxtLink to="/new" class="w-10 h-10 absolute -top-10 left-8">
					<el-button type="success" size="large" circle :icon="Edit" :disabled="isNewRoute" />
				</NuxtLink>
				<!-- back button -->
				<NuxtLink v-if="!isHomeRoute" to="/" class="absolute z-20 top-12 left-8">
					<el-button class="w-full" circle size="large" type="info">
						<el-icon v-if="isResultsRoute"><Back /></el-icon>
						<el-icon v-else><Close /></el-icon>
					</el-button>
				</NuxtLink>
			</div>
		</el-header>
		<!-- content -->
		<el-main>
			<slot />
		</el-main>
	</el-container>
</template>

<script setup>
import { Edit, Back, Close } from '@element-plus/icons-vue'

const routes = {
	new: 'new',
	home: 'index',
	results: 'results'
}
const route = useRoute()
const isNewRoute = computed(() => route.name === routes.new)
const isHomeRoute = computed(() => route.name === routes.home)
const isResultsRoute = computed(() => route.name === routes.results)

</script>