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
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>
<style>
#book_area {
  height: 900px;
  border: 1px solid #333;
}

nav {
  display: flex;
  /* background-color: #f1f1f1; */
  margin: 5px;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #333;
  
}


</style>
