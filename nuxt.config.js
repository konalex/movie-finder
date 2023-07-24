// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'MovieFinder'
		}
	},
	devtools: { enabled: false },
	modules: [
		"@element-plus/nuxt",
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt"
	],
	pinia: {
		// preventing bugs with auto-imports
		autoImports: [
			'defineStore',
		],
	},
	runtimeConfig: {
		app: {
			apikey: process.env.NUXT_API_SECRET,
			type: process.env.NUXT_API_TYPE,
			apiUrl: process.env.NUXT_API_URL
		}
	},
	ssr: true
})