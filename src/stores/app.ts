import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// 메뉴 기본 항목
enum MenuItemsTitle {
	HOME = 'Home',
	INTRODUCE = 'Introduce',
	SKILLS = 'Skills',
	PROJECTS = 'Projects',
}

export const useAppStore = defineStore(
	'app',
	() => {
		// 현재 메뉴 (기본값: HOME)
		const currentMenu = ref(MenuItemsTitle.HOME);
		// 메뉴 목록
		const menus = ref([
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

		function changeCurrentMenu(menu: MenuItemsTitle) {
			currentMenu.value = menu;
		}

		return { currentMenu, menus, changeCurrentMenu };
	},
	{
		// persist 옵션 추가
		persist: {
			enabled: true, // 상태를 영구적으로 저장
			strategies: [
				{
					key: 'app-store', // localStorage에 저장될 키 이름
					storage: localStorage, // 저장 위치 (localStorage 또는 sessionStorage)
					paths: ['currentMenu'], // 특정 상태만 저장 (예: currentMenu)
				},
			],
		},
	}
);
