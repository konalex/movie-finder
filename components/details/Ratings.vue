<template>
	<div class="flex w-full justify-between">
		<span class="font-bold mr-2">
			{{ name }}
		</span>
		<div class="flex flex-col">
			<div v-for="(rating, id) in data" :key="id" class="flex justify-between items-start">
				<span class="mr-4">
					{{ rating.Source }}
				</span>
				<span class="font-semibold">
					{{ rating.Value }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>

defineProps(['name', 'data'])

</script>