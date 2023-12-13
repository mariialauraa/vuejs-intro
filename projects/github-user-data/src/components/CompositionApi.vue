<script setup>
import { reactive } from 'vue';

const state = reactive({
  login: '',
  name: '',
  company: '',
  bio: '',
  avatar_url: '',
  repos: [], //repositório
  searchInput: ''
})

async function fetchGithubUser() {
  const resposta = await fetch(`https://api.github.com/users/${state.searchInput}`)
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
</script>

<template>  
  <h2>GitHub User Data</h2>
  <input type="text" v-model="state.searchInput">
  <button v-on:click="fetchGithubUser">Carregar Usuário</button>
  <div v-if="state.login !== ''">
    <img v-bind:src="state.avatar_url">
    <strong>@{{ state.login }}</strong>
    <h1>{{ state.name }}</h1>
    <h3>{{ state.company }}</h3>
    <span>{{ state.bio }}</span>
  </div>

  <section v-if="state.repos.length > 0">
    <article v-for="repo of state.repos">
      <h3>{{ repo.full_name }}</h3>
      <p>{{ repo.description }}</p>
      <a :href="repo.html_url" target="_blank">Ver no GitHub</a>
    </article>
  </section>
</template>