<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<h1>FE Developer Seungchan Bae</h1>
<nav>
  <RouterLink to="/introduce">Introduce</RouterLink> |
  <RouterLink to="/portfolio">Portfolio</RouterLink>
</nav>
<RouterView />



</template>

<style scoped>

</style>
