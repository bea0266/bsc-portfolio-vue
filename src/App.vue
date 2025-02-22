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
			<!-- TODO: 
			    1. 이 페이지 버튼을 어떻게 꾸며볼까?
				2. 메뉴와 이전/다음버튼 클릭 시 프로그레스바 동작을 일관성 있게 구현하려면 어떻게 해야 하나? 
		    -->
			<button id="btn__page--prev" @click="clickPageBtn(ButtonsTitle.PREV)" class="btn__page"></button>
			<button id="btn__page--next" @click="clickPageBtn(ButtonsTitle.NEXT)" class="btn__page"></button>
		</section>
	</main>
</template>
<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { linkToPage } from '@/utils/routerUtils';
	import { computed, ref } from 'vue';
	import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

	// 메뉴 기본 항목
	enum MenuItemsTitle {
		HOME = 'Home',
		INTRODUCE = 'Introduce',
		SKILLS = 'Skills',
		PROJECTS = 'Projects',
	}
	// 화면 공통 사용되는 버튼에 대한 타이틀 정보
	enum ButtonsTitle {
		NEXT = 'Next',
		PREV = 'Prev', 
	}
    // 프로그레스바 최소값, 최대값 정의
	enum ProgressBarOption {
		MIN = 0,
		MAX = 100,
	}
    
	const appStore = useAppStore();

	const { currentMenu, menus } = storeToRefs(appStore);

	const menuItems = computed(() => menus.value.map((item) => {
		return {
			id: item.id,
			title: item.title,
		}
	}));

	const menuProgress = ref({
		percent: 25,
		min: ProgressBarOption.MIN,
		max: ProgressBarOption.MAX,
	});

	const clickMenu = (menuTitle: MenuItemsTitle) => {
		switch (menuTitle) {
			case MenuItemsTitle.HOME:
				changeProgressBarPercent(25);
				break;
			case MenuItemsTitle.INTRODUCE:
				changeProgressBarPercent(50);
				break;
			case MenuItemsTitle.SKILLS:
				changeProgressBarPercent(75);
				break;
			case MenuItemsTitle.PROJECTS:
				changeProgressBarPercent(100);
				break;
		}

		appStore.changeCurrentMenu(menuTitle);
		linkToPage(menuTitle.toLowerCase());
		
	};

	const changeProgressBarPercent = (val: number) => {
	    if (val < ProgressBarOption.MIN) {
			menuProgress.value.percent = ProgressBarOption.MIN;
		} else if (val > ProgressBarOption.MAX) {
			menuProgress.value.percent = ProgressBarOption.MAX;
		} else {
			menuProgress.value.percent = val;
		}
	}

	const clickPageBtn = (title: ButtonsTitle) => {
		const currentProgressPercent = menuProgress.value.percent;
		switch (title) {
			case ButtonsTitle.PREV:
				if (currentProgressPercent === ProgressBarOption.MIN) return;
				changeProgressBarPercent(currentProgressPercent - 25);
				break;
			case ButtonsTitle.NEXT:
				if (currentProgressPercent === ProgressBarOption.MAX) return;
				changeProgressBarPercent(currentProgressPercent + 25);
		}
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
		background-color: #4e4d4d;
		color: white;
	}
	#btn__page--prev::after {
		content: '이전';
	}
	#btn__page--next::after {
		content: '다음';
	}
</style>
