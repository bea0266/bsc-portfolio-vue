<template>
	<div>
		<div class="details">
			<p class="intro">{{ introduce.description }}</p>
		</div>
    <h1>소개</h1>
	</div>
</template>
<script setup lang="ts">
	import introduce from '@/article/introduce.json';
</script>
<style scoped>
	.intro {
		line-height: 50px;
		width: 570px;
	}
</style>
