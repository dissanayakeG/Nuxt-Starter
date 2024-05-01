<template>
	<div>
		Index
		<img src="@/assets/1.jpg" />

		public assets
		<img src="/2.jpg" />
	</div>
</template>

<script setup>
//Composables
const { sayHello } = useUtils();
sayHello();

//Plugins
const { $myPlugin } = useNuxtApp();
console.log($myPlugin("Madusanka"));

//Middlewares
definePageMeta({
	middleware: "local",
});
</script>
