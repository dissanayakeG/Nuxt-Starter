<template lang="">
	<div class="mb-2">
		<header>
			<ul class="p-2 bg-gray-300 w-full flex justify-evenly font-bold">
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/events">Events</NuxtLink>
				<NuxtLink to="/profiles">Profiles</NuxtLink>
				<NuxtLink to="/profiles/someElse">Profiles/someElse</NuxtLink>
				<NuxtLink to="/states">states</NuxtLink>
			</ul>
		</header>

		<!-- component name is the component path name -->
		<ProfileHeaderAvatar />
	</div>
</template>
