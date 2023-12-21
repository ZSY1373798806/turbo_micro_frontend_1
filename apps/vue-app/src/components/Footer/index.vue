<template>
	<div :style="{ 'background-color': bgColor }">
		<div>{{ title }}</div>
		<div>{{ year }}</div>
	</div>
</template>

<script>
export default {
	props: {
		bgColor: String,
		title: String,
		year: Number,
	},
};
</script>

<style></style>
