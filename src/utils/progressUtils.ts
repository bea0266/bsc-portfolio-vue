import { useAppStore } from '@/stores/app';
import { linkToPage } from './routerUtils';
import { ref } from 'vue';

// 메뉴 기본 항목
export enum MenuItemsTitle {
	HOME = 'Home',
	INTRODUCE = 'Introduce',
	SKILLS = 'Skills',
	PROJECTS = 'Projects',
}
// 화면 공통 사용되는 버튼에 대한 타이틀 정보
export enum ButtonsTitle {
	NEXT = 'Next',
	PREV = 'Prev',
}
// 프로그레스바 최소값, 최대값 정의
export enum ProgressBarOption {
	MIN = 0,
	MAX = 100,
}

export const menuProgress = ref({
	percent: 25,
	min: ProgressBarOption.MIN,
	max: ProgressBarOption.MAX,
});

export const getProgressBarPercent = (val: number) => {
	if (val < ProgressBarOption.MIN) {
		menuProgress.value.percent = ProgressBarOption.MIN;
	} else if (val > ProgressBarOption.MAX) {
		menuProgress.value.percent = ProgressBarOption.MAX;
	} else {
		menuProgress.value.percent = val;
	}
};

export const clickMenu = (menuTitle: MenuItemsTitle) => {
    const appStore = useAppStore();
	switch (menuTitle) {
		case MenuItemsTitle.HOME:
			getProgressBarPercent(25);
			break;
		case MenuItemsTitle.INTRODUCE:
			getProgressBarPercent(50);
			break;
		case MenuItemsTitle.SKILLS:
			getProgressBarPercent(75);
			break;
		case MenuItemsTitle.PROJECTS:
			getProgressBarPercent(100);
			break;
	}

	appStore.changeCurrentMenu(menuTitle);
	linkToPage(menuTitle.toLowerCase());
};
