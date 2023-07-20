import { useFilmsStore } from "@/stores/films"

export default defineNuxtRouteMiddleware((to, from) => {
	const store = useFilmsStore()
  if(!store.getAllFilms.find((el: any) => el.imdbID === to.params.id)) {
    return navigateTo('/')
  }
})