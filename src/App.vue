<template>
	<header class="header">
		<nav class="nav-menu">
			<div class="nav-menu__item" @click="linkToPage('home')">Home</div>
			<div class="nav-menu__item" @click="linkToPage('introduce')">Introduce</div>
			<div class="nav-menu__item" @click="linkToPage('skills')">Skills</div>
			<div class="nav-menu__item" @click="linkToPage('projects')">Projects</div>
		</nav>
		<!-- TODO: 메뉴에 대한 진행 상황을 표시하고 싶어 -->
		<div class="nav-menu__indicator"></div>
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
import { linkToPage } from '@/utils/routerUtils';
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

	.nav-menu__indicator {
		background-color: #333;
		height: 5px;
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
