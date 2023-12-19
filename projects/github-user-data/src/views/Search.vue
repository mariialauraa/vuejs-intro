<script setup>
import Profile from '../components/Profile.vue'
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