<template>
	<div id="job-requirement">
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	name: 'JobRequirement',
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
#job-requirement {
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--tertiary-color);
	border-color: var(--tertiary-color);
	border-style: solid;
	border-width: 1px !important;
	border-radius: 10px;
	margin: 5px;
	padding: 5px;
	transition: all 0.2s ease-in-out;
}

#job-requirement:hover {
	background-color: var(--tertiary-color);
	color: var(--secondary-color);
}


h2,
p {
	margin: auto;
}
</style>