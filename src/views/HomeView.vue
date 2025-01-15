<template>
    <div class="main_cont">
        <h1 class="main_cont__title">개발자 배승찬의 이야기</h1>
        <p>안녕하세요 개발자 배승찬입니다. </p>
        <p>바로가기</p>
        <button class="main_cont__btn" @click="linkToPage('introduce')">Introduce</button>
        <button class="main_cont__btn" @click="linkToPage('skills')">Skills</button>
        <button class="main_cont__btn" @click="linkToPage('projects')">Projects</button>
    </div>
</template>
<script setup lang="ts">
import { linkToPage } from '@/utils/routerUtils';

</script>
<style>
.main_cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 800px;
}

.main_cont__btn {
  width: 125px;
  background-color: #000000;
  color: white;
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;
}
</style>