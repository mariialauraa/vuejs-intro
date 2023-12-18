<script setup>
import Profile from './components/Profile.vue'
import { ref } from 'vue';

//Hooks onMounted, onUpdated e onUnmounted:
const isOpen = ref(true)
</script>

<template>
<!--Incluindo o onUnmounted-->
  <input type="checkbox" v-model="isOpen"> {{ isOpen }}

  <!--Incluindo o componente-->
  <Profile v-if="isOpen">
    <!--slot-->
    <h1>GitHub User Data</h1>

    <template v-slot:footer>
      <footer>
        Desenvolvido por <a href="https://github.com/mariialauraa" target="_blank">Maria Laura</a>
      </footer>      
    </template>
  </Profile>
</template>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

h1,
h2 {
  color: #f64348;
  margin: 1rem auto .25rem;
}

footer {
  height: 3rem;
  margin-top: 2rem;
  padding: 1rem 0;
}

a {
  color: #f64348;
}
</style>