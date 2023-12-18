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
  <Profile v-if="isOpen"/>
</template>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

a {
  color: #f64348;
}
</style>