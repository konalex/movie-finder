// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'MovieFinder'
		}
	},
	devtools: { enabled: true },
	modules: [
		"@element-plus/nuxt",
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt"
	],
	pinia: {
		autoImports: [
			'defineStore',
		],
	},
})