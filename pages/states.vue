<script setup lang="ts">
// const useColor2 = () => useState<string>('color', () => 'pink')

const color = useColor(); // Same as useState('color')

//With Pinia
const website = useWebsiteStore();
await callOnce(website.fetch);
</script>

<template>
	<p>Current color: {{ color }}</p>

	<h1>{{ website.name }}</h1>
	<p>{{ website.description }}</p>
</template>
