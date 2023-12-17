<template>
	<button @click="click">remote Vue Button {{ name }}</button>
</template>

<script>
export default {
	props: {
		name: String,
	},
	methods: {
		click() {
			this.$emit("hello");
		},
	},
};
</script>

<style></style>
