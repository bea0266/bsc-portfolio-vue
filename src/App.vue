<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav>
  <RouterLink to="/home">Home</RouterLink> |
  <RouterLink to="/introduce">Introduce</RouterLink> |
  <RouterLink to="/skills">Skills</RouterLink> |
  <RouterLink to="/projects">Projects</RouterLink>
</nav>
<div id="book_area">
  <RouterView />
  <span>이전 페이지</span> | 
  <span>다음 페이지</span>
</div>




</template>

<style scoped>
#book_area {
  height: 900px;
  background-color: #c25959;
}
</style>
