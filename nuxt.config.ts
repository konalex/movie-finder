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
})