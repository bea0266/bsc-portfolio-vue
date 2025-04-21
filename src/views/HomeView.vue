<template>
    <div class="main_cont">
        <div class="content-wrapper">
            <h1 class="main_cont__title">개발자 배승찬의 이야기</h1>
            <p>안녕하세요 개발자 배승찬입니다. </p>
            <p>바로가기</p>
            <div class="button-group">
                <button class="main_cont__btn" @click="clickQuickMenu(MenuItemsTitle.INTRODUCE)">Introduce</button>
                <button class="main_cont__btn" @click="clickQuickMenu(MenuItemsTitle.SKILLS)">Skills</button>
                <button class="main_cont__btn" @click="clickQuickMenu(MenuItemsTitle.PROJECTS)">Projects</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { linkToPage } from '@/utils/routerUtils';
import { menuProgress, clickMenu, MenuItemsTitle } from '@/utils/progressUtils';

const clickQuickMenu = (title: MenuItemsTitle) => {
    clickMenu(title);
    linkToPage(title);
};

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

.main_cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.main_cont::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.main_cont > * {
    position: relative;
    z-index: 2;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.main_cont__title {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    text-align: center;
    color: white;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
}

.main_cont p {
    margin-bottom: 2rem;
    font-size: 1.3rem;
    color: white;
    font-weight: 500;
    font-family: 'Noto Sans KR', sans-serif;
}

.button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.main_cont__btn {
    width: 200px;
    background-color: #2196F3;
    color: white;
    border-radius: 25px;
    padding: 12px 24px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Noto Sans KR', sans-serif;
}

.main_cont__btn:hover {
    background-color: #1976D2;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}
</style>