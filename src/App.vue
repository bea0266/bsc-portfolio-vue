<template>
	<header class="header">
		<nav class="nav-menu">
			<div
				v-for="item in menuItems"
				:key="item.id"
				@click="clickMenu(item.title)"
			>
				{{ item.title }}
			</div>
		</nav>
		<!-- TODO: 메뉴에 대한 진행 상황을 표시하고 싶어 -->
		<progress
			class="header__progress"
			:value="menuProgress.percent"
			:min="menuProgress.min"
			:max="menuProgress.max"
		></progress>
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
	import { ref } from 'vue';

	// 메뉴 기본 항목
	enum MenuItemsTitle {
		HOME = 'Home',
		INTRODUCE = 'Introduce',
		SKILLS = 'Skills',
		PROJECTS = 'Projects',
	}
	// 메뉴 항목 정의
	const menuItems = ref([
		{
			id: 1,
			title: MenuItemsTitle.HOME,
		},
		{
			id: 2,
			title: MenuItemsTitle.INTRODUCE,
		},
		{
			id: 3,
			title: MenuItemsTitle.SKILLS,
		},
		{
			id: 4,
			title: MenuItemsTitle.PROJECTS,
		},
	]);
	const menuProgress = ref({
		percent: 25,
		min: 0,
		max: 100,
	});

	const clickMenu = (menuTitle: string) => {
		switch (menuTitle) {
			case MenuItemsTitle.HOME:
				menuProgress.value.percent = 25;
				break;
			case MenuItemsTitle.INTRODUCE:
				menuProgress.value.percent = 50;
				break;
			case MenuItemsTitle.SKILLS:
				menuProgress.value.percent = 75;
				break;
			case MenuItemsTitle.PROJECTS:
				menuProgress.value.percent = 100;
				break;
		}

		linkToPage(menuTitle.toLowerCase());
	};
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

	.header__progress {
		width: 100%;
		height: 10px;
		appearance: none;
	}

	.header__progress::-webkit-progress-bar {
		background: #e0dfdc83;
		box-shadow: inset 3px 3px 10px #ccc;
	}

	.header__progress::-webkit-progress-value {
		background: #707070;
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
