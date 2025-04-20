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
			<RouterView v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<Component :is="Component" :key="$route.fullPath" />
				</transition>
			</RouterView>
			<!-- TODO: 
			    1. 이 페이지 버튼을 어떻게 꾸며볼까?
				2.상태 관리를 사용해서 이전/다음버튼 클릭 시 동작을 구현해보자.
		    -->
			<button
				id="btn__page--prev"
				@click="clickPageBtn(ButtonsTitle.PREV)"
				class="btn__page"
			></button>
			<button
				id="btn__page--next"
				@click="clickPageBtn(ButtonsTitle.NEXT)"
				class="btn__page"
			></button>
		</section>
	</main>
</template>
<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { linkToPage } from '@/utils/routerUtils';
	import { computed, onMounted, ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useAppStore } from '@/stores/app';
	import {
		ButtonsTitle,
		menuProgress,
		ProgressBarOption,
		getProgressBarPercent,
		clickMenu,
MenuItemsTitle,
	} from '@/utils/progressUtils';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const appStore = useAppStore();
	const { currentMenu, menus } = storeToRefs(useAppStore());

	const menuItems = computed(() =>
		menus.value.map(item => {
			return {
				id: item.id,
				title: item.title,
			};
		})
	);

	const clickPageBtn = (title: ButtonsTitle) => {
		const currentProgressPercent = menuProgress.value.percent;
		switch (title) {
			case ButtonsTitle.PREV:
				if (currentProgressPercent === ProgressBarOption.MIN) return;
				getProgressBarPercent(currentProgressPercent - 25);
				break;
			case ButtonsTitle.NEXT:
				if (currentProgressPercent === ProgressBarOption.MAX) return;
				getProgressBarPercent(currentProgressPercent + 25);
		}
	};

	onMounted(() => {
		const currentMenuTitle = currentMenu.value;
		console.log('currentMenuTitle', currentMenuTitle);
		clickMenu(currentMenuTitle);

	});
</script>
<style>
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
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 25px;
		border: none;
		width: 85px;
		padding: 10px;
		background-color: #4e4d4d;
		color: white;
	}

	/* .btn__page {
		border-radius: 25px;
		border: none;
		width: 85px;
		padding: 10px;
		margin-left: 10px;
		background-color: #4e4d4d;
		color: white;
	}*/
	/* 이전 버튼: 왼쪽에 배치 */
	#btn__page--prev {
		left: 10%; /* 부모 요소의 왼쪽에서 10% */
		transform: translateX(0); /* 중앙 정렬 해제 */
	}

	/* 다음 버튼: 오른쪽에 배치 */
	#btn__page--next {
		right: 10%; /* 부모 요소의 오른쪽에서 10% */
		transform: translateX(0); /* 중앙 정렬 해제 */
	}

	#btn__page--prev::after {
		content: '이전';
	}
	#btn__page--next::after {
		content: '다음';
	}
</style>
