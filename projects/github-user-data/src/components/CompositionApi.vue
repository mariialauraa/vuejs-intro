<script setup>
import { reactive } from 'vue';

const state = reactive({
  login: 'jpaulo',
  name: 'João Paulo',
  company: 'Acme Inc.',
  bio: '...',
  avatar_url: 'https://unsplash.it/256',
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
}
</script>


<template>
  <h2>GitHub User Data</h2>
  <input type="text" v-model="state.searchInput">
  <button v-on:click="fetchGithubUser">Carregar Usuário</button>
  <img v-bind:src="state.avatar_url">
  <strong>@{{ state.login }}</strong>
  <h1>{{ state.name }}</h1>
  <h3>{{ state.company }}</h3>
  <span>{{ state.bio }}</span>
</template>