import { useFilmsStore } from "@/stores/films"

export default defineNuxtRouteMiddleware((to, from) => {
	const store = useFilmsStore()
  if(!store.getAllFilms.length) {
    return navigateTo('/')
  }
})