<script setup>
import { reactive, ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';

const searchInput = ref('') //passa o valor inicial ('')

const state = reactive({
  login: '',
  name: '',
  company: '',
  bio: '',
  avatar_url: '',
  repos: [] //repositório  
})

async function fetchGithubUser(evt) {
  //'fetchGithubUser' é um formulário e o 'evt' é usado para não mudar de página
  evt.preventDefault()

  const resposta = await fetch(`https://api.github.com/users/${searchInput.value}`)
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
  <h2>GitHub User Data</h2>
  
  <!--criar um formulário-->
  <form @submit="fetchGithubUser">
    <input type="text" v-model.lazy="searchInput">
    <button type="submit">Carregar Usuário</button>
  </form>
  
  <div v-if="state.login !== ''">
    <img v-bind:src="state.avatar_url">
    <strong>@{{ state.login }}</strong>
    <h1>{{ state.name }}</h1>
    <h3>{{ state.company }}</h3>
    <span>{{ state.bio }}</span>
  </div>

  <section v-if="state.repos.length >= 0">
    <!--uma contagem de repositório-->
    <h2>{{ reposCountMessage }}</h2>    
    <article v-for="repo of state.repos">
      <h3>{{ repo.full_name }}</h3>
      <p>{{ repo.description }}</p>
      <a :href="repo.html_url" target="_blank">Ver no GitHub</a>
    </article>
  </section>
</template>

<style scoped>
img {
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  display: block;
  margin: 1rem auto;
  width: 8rem;
  height: 8rem;
}

h1,
h2 {
  color: #f64348;
  margin: 1rem auto .25rem;
}

h3 {
  margin: 1rem auto .25rem;
}

span {
  display: block;
  margin: 1rem auto;
}

input,
button {
  max-width: 20rem;
  padding: .5rem;
}

input {
  background-color: #1c1a1d;
  border: 1px solid #f64348;
  border-radius: .25rem;
  color: #e5e5e5;
  margin: 1rem 1rem 1rem 0;
}

button {
  background-color: #f64348;
  border: unset;
  border-radius: .25rem;
  color: #1c1a1d;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

a {
  color: #f64348;
}
</style>