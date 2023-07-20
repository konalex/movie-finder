<template>
	<div class="container mx-auto flex flex-col justify-center items-center mt-10">
		<!-- main search form -->
		<div
			class="w-full p-2"
			v-loading="loading"
			element-loading-background="rgba(255, 255, 255, 0.7)"
		>
			<el-form class="w-full z-20" @submit="submit">
				<el-input
					v-model="title"
					size="large"
					placeholder="Please input the movie title"
					:prefix-icon="Search"
				/>
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
function submit(event) {
	if (!title.value) return;
	event.preventDefault();

	search(title.value);
}

// main search
async function search(title) {
	loading.value = true;
	message.value = '';
	store.setSearchString(title)

	store.clearFilmsList();

	const { success, data, total, error } = await useSearch(1, title);

	loading.value = false;

	if(success) {
		store.setFilmsList(data)
		store.setTotal(Number(total))

		useRouter().push({ path: 'results' })

		console.log(useRouter().push({ path: 'results' }));
	}
	else {
		message.value = error;
	}
}

onMounted(() => {
	// set default api key
	localStorage.setItem('moviefinder_apikey', '68c2f680')
})

</script>

<style lang="sass">
.el-carousel__arrow
	background-color: black

	&:hover
		background-color: #73767a
</style>