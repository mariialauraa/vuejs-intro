<script setup>
import { reactive, ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import UserInfo from './UserInfo.vue';
import Repository from './Repository.vue';
import Form from './Form.vue';

const username = ref('')

const state = reactive({
  login: '',
  name: '',
  company: '',
  bio: '',
  avatar_url: '',
  repos: [] //repositório  
})

//'fetchGithubUser' é um formulário
async function fetchGithubUser(searchInput) {
  const resposta = await fetch(`https://api.github.com/users/${searchInput}`)
  const { login, name, company, bio, avatar_url } = await resposta.json()

  state.login = login
  state.name = name
  state.company = company
  state.bio = bio
  state.avatar_url = avatar_url

  fetchUserRepositories(login)
}

//vai pegar os repositórios públicos do usuário
async function fetchUserRepositories() {
  const resposta = await fetch(`https://api.github.com/users/${state.login}/repos`)
  const repos = await resposta.json()

  state.repos = repos
}

//o 'computed' é chamado 1x e só vai ser chamado de novo se o 'state.repos.length' mudar
const reposCountMessage = computed(() => {
  return state.repos.length > 0
    ? `${state.name} possui ${state.repos.length} repositórios públicos`
    : `${state.name} não possui repositórios públicos`

})

onMounted(() => {
  console.log("O componente foi montado.")
})

onUpdated(() => {
  console.log("O componente foi atualizado.")
})

onUnmounted(() => {
  console.log("O componete foi desmontado.")
})
</script>

<template>  
  <slot></slot>
  <p>Pesquisando por: <strong>https://api.github.com/users/{{ username }}</strong></p> 
  <!--importa o Form.vue-->
  <Form @form-submit="fetchGithubUser" v-model="username" />

  <!--importa o UserInfo.vue + props-->
  <UserInfo v-if="state.login !== ''" :avatar_url="state.avatar_url" :login="state.login" :name="state.name" :company="state.company" :bio="state.bio" />  

  <section v-if="state.repos.length >= 0">
    <!--uma contagem de repositório-->
    <h2>{{ reposCountMessage }}</h2> 
      <!--importa o Repository.vue + props-->
      <Repository v-for="repo of state.repos" :full_name="repo.full_name" :description="repo.description" :html_url="repo.html_url" />
  </section>

  <slot name="footer"></slot>
</template>