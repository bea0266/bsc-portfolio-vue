<template>
	<header class="header">
		<nav class="nav-menu">
			<RouterLink to="/home">Home</RouterLink> |
			<RouterLink to="/introduce">Introduce</RouterLink> |
			<RouterLink to="/skills">Skills</RouterLink> |
			<RouterLink to="/projects">Projects</RouterLink>
		</nav>
	</header>
	<main class="main-cont">
		<section class="book-area">
			<RouterView />
			<!-- TODO: 이 페이지 버튼을 어떻게 꾸며볼까? -->
			<button id="btn__page--prev" class="btn__page"></button>
			<button id="btn__page--next" class="btn__page"></button>
		</section>
	</main>
</template>
<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
</script>
<style>
	.book-area {
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
  
  .btn__page {
    border-radius: 25px;
    border: none;
    width: 85px;
    padding: 10px;
    margin-left: 10px;
  }
  #btn__page--prev::after {
    content: '이전';
  }
  #btn__page--next::after {
    content: '다음';
  }
</style>
