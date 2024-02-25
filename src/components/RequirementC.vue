<template>
	<div id="main-content">{{ text }}</div>
</template>

<script>
export default {
	name: 'RequirementC',
	props: {
		text: String
	}
}
</script>

<style scoped>
#main-content {
	border-color: var(--primary-color-color);
	border-style: solid;
	border-width: 1px !important;
	border-radius: 10px;
	margin: 5px;
}
</style>