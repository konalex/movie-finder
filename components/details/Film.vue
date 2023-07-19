<template>
	<div>
		<img :src="poster" class="h-[30rem] w-full sm:w-80 transition" />
		<div class="w-full sm:w-80 pt-4 transition">
			<h3 class="text-3xl mb-2">{{ title }}</h3>
			<div class="flex justify-between items-start">
				<span v-if="director">
					{{ director }}
				</span>
				<el-tooltip v-else class="box-item" effect="dark" placement="bottom">
					<template #content>
						There is no API way to get this data in search. <br> And there are no parameters for the request that <br> could be used to modify the request.
						<!-- Еру OMDb API is not very feature-rich.
							I did not choose another one, as this one was offered in the task. -->
					</template>
					<span class="text-sm text-gray-500 capitalize">
						unavailable
					</span>
				</el-tooltip>
				<span class="text-xs text-left">
					{{ year }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>

defineProps(['poster', 'title', 'year', 'director'])

</script>