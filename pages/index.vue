<template>
	<div class="container mx-auto flex flex-col justify-center items-center mt-10">
		<!-- main search form -->
		<div
			class="w-full p-2"
			v-loading="loading"
			element-loading-background="rgba(255, 255, 255, 0.7)"
		>
			<el-form class="w-full z-20 flex" @submit.prevent="submit">
				<el-form-item class="w-full">
					<el-input
						v-model="title"
						size="large"
						placeholder="Please input the movie title"
						:prefix-icon="Search"
					/>
				</el-form-item>

				<el-form-item class="ml-1">
					<el-button size="large" type="primary" class="w-full" :icon="Search" native-type="submit" />
				</el-form-item>

			</el-form>
			<!-- error message -->
			<div :class="['flex transition-all text-center font-semibold mt-4 ease-in-out text-danger', {
				'translate-y-0': message,
				'translate-y-full': !message
			}]">
				{{ message }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { useFilmsStore } from '@/stores/films'
const store = useFilmsStore()

const title = ref('')
const loading = ref(false)
const message = ref('')

// form submit
function submit() {
	if (!title.value) return;

	search(title.value);
}

// main search
async function search(title) {
	loading.value = true;
	message.value = '';

	store.clearFilmsList();

	const { success, data, error } = await useSearch(1, title);

	loading.value = false;

	if(success) {
		store.setFilmsList(data)
		useRouter().push({ path: 'results' })
	}
	else {
		message.value = error;
	}
}

</script>

<style lang="sass">
.el-carousel__arrow
	background-color: black

	&:hover
		background-color: #73767a
</style>