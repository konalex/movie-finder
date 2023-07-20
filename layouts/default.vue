<template>
	<el-container class="container mx-auto h-screen">
		<el-header class="flex flex-col sm:flex-row w-full items-end" height="auto">
			<div class="w-1/5/ items-end justify-center hidden sm:flex">
				<!-- new button -->
				<NuxtLink to="/new">
					<el-button type="success" :icon="Edit" :disabled="isNewRoute">
						New
					</el-button>
				</NuxtLink>
			</div>
			<!-- Main 'logo' -->
			<NuxtLink to="/" class="w-full sm:w-96" id="header-title">
				<h1 class="text-5xl font-semibold text-center">
					<span class="text-amber-300 -mr-1">
						Movie
					</span>
					<span class="text-sky-600 -ml-1">
						Finder
					</span>
				</h1>
			</NuxtLink>
			<!-- block for mobile -->
			<div class="w-full flex mt-2 sm:w-1/5 gap-x-1">
				<!-- new button -->
				<NuxtLink to="/new" class="sm:hidden inline w-1/2">
					<el-button type="success" :icon="Edit" :disabled="isNewRoute" class="w-full">
						New
					</el-button>
				</NuxtLink>
				<!-- settings button -->
				<NuxtLink to="/settings" class="w-1/2 inline sm:w-auto">
					<el-button type="info" :icon="Setting" :disabled="isSettingsRoute" class="w-full">
						Settings
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
import { Edit, Setting } from '@element-plus/icons-vue'

const routes = {
	new: 'new',
	settings: 'settings'
}

const route = useRoute()

const isNewRoute = computed(() => route.name === routes.new)
const isSettingsRoute = computed(() => route.name === routes.settings)

</script>