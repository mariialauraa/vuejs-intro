<script>
export default {
  data() {
    return {
      login: 'jpaulo',
      name: 'João Paulo',
      company: 'Acme Inc.',
      bio: '...',
      avatar_url: 'https://unsplash.it/256',
      searchInput: ''
    }
  },
  methods: {
    async fetchGithubUser() {
      const resposta = await fetch(`https://api.github.com/users/${this.searchInput}`)
      const { login, name, company, bio, avatar_url } = await resposta.json()

      this.login = login
      this.name = name
      this.company = company
      this.bio = bio
      this.avatar_url = avatar_url
    }
  }
}
</script>


<template>
  <h2>GitHub User Data</h2>
  <input type="text" v-model="searchInput">
  <button v-on:click="fetchGithubUser">Carregar Usuário</button>
  <img v-bind:src="avatar_url">
  <strong>@{{ login }}</strong>
  <h1>{{ name }}</h1>
  <h3>{{ company }}</h3>
  <span>{{ bio }}</span>
</template>