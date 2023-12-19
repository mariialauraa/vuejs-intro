import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Search from "./views/Search.vue";

//rotas: caminho '/' inicial + componente
const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search }
]

const router = createRouter({
  //histórico do navegador
  history: createWebHistory(),
  routes
})

export default router