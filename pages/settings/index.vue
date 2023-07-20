<template>
	<div class="flex flex-col w-full">
		<!-- settings form -->
		<el-form
			:model="form"
			ref="ruleFormRef"
			label-width="120px"
			label-position="top"
			class="w-full z-20"
		>
			<el-form-item label="Api Key">
				<el-input v-model="form.apikey" @change="submitForm" />
			</el-form-item>
		</el-form>
		<div :class="['flex text-white bg-green-600 p-3 rounded-md justify-center transition z-10', {
			'opacity-100 translate-y-0': success,
			'opacity-0 -translate-y-full': !success
		}]">
			Saved! Now you will use this key.
		</div>
	</div>
</template>

<script setup>
const form = reactive({
	apikey: localStorage.getItem('moviefinder_apikey')
})
const success = ref(false)

function submitForm() {
	if (form.apikey) {
		localStorage.setItem('moviefinder_apikey', form.apikey);

		success.value = true;
	}
}

</script>