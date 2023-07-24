<template>
	<div class="relative w-2/3 mx-auto">
		<!-- Success message -->
		<div
			:class="['opacity-0 absolute flex flex-col justify-center items-center h-[37.5rem] bg-emerald-400 rounded-md transition delay-100', {
				'opacity-100': success
			}]"
		>
			<el-icon size="50" color="white"><Check /></el-icon>
			<span class="text-white font-normal text-2xl mt-5">
				Sent successfully!
			</span>
		</div>
		<!-- Main form -->
		<el-form
			v-if="!success"
			v-loading="loading"
			:model="form"
			:rules="rules"
			ref="ruleFormRef"
			label-width="120px"
			label-position="top"
			class="relative"
		>

			<el-form-item label="Title" prop="title">
				<el-input v-model="form.title" />
			</el-form-item>

			<el-form-item label="Director" prop="director">
				<el-input v-model="form.director" />
			</el-form-item>

			<el-form-item label="Year" prop="year">
				<el-date-picker v-model="form.year" type="year" placeholder="Pick a year" style="width: 100%" />
			</el-form-item>

			<el-form-item label="Poster" prop="poster">
				<el-upload
					:show-file-list="false"
					:on-success="uploadFileSuccess"
					class="border flex justify-center items-center mx-auto w-full"
				>
					<img v-if="form.poster" :src="form.poster" />
					<div v-else class="w-full h-full flex flex-col justify-center items-center py-20">
						<el-icon class="mb-4" size="40">
							<Plus />
						</el-icon>
						Upload a poster
					</div>
				</el-upload>
			</el-form-item>
			<div class="flex mt-8">
				<!-- submit button -->
				<el-form-item class="w-1/2">
					<el-button type="success" @click="submitForm(ruleFormRef)" class="w-full" size="large" :disabled="!hasValue">
						Submit
					</el-button>
				</el-form-item>
				<!--  -->
				<el-form-item class="w-1/2 ml-1" @click="resetForm">
					<el-button class="w-full" type="primary" size="large">
						Reset
					</el-button>
				</el-form-item>
			</div>
		</el-form>

	</div>
</template>

<script setup>
import { Plus, Check } from '@element-plus/icons-vue';
// rules for validation
const rules = reactive({
	title: {
		required: true,
		min: 3,
	},
	year: {
		type: 'date',
		required: true,
	},
	director: {
		required: true,
		min: 3,
	},
	poster: {
		required: true,
	}
})

// form
const ruleFormRef = ref(null);
const form = reactive({
	title: '',
	year: '',
	director: '',
	poster: ''
})
// additional variables
const loading = ref(false)
const success = ref(false)

// file upload
const uploadFileSuccess = (response, uploadFile) => {
	form.poster = URL.createObjectURL(uploadFile.raw)
}
// watch file change and re-validate form
watch(() => form.poster, async () => {
	await ruleFormRef.value.validateField('poster');
})

const hasValue = computed(() => !!Object.values(form).find(el => el))

// reset form
function resetForm() {
	ruleFormRef.value.resetFields(Object.keys(form))
}

// form submit
const submitForm = async () => {
	if (!ruleFormRef.value) return;
	if (!hasValue) return
	await ruleFormRef.value.validate((valid, fields) => {
		if (valid) {
			loading.value = true

			// pretend we are doing something
			setTimeout(() => {
				loading.value = false
				success.value = true
			}, 3000)
		}
	})
}

</script>

<style lang="sass">
.el-upload
	width: 100%
</style>