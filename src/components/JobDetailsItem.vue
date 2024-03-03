<template>
	<div class="text-truncate text-capitalize col" id="job-details-item">
		<svg class="b-icon bi" height="1em" fill="currentColor" focusable="false" role="img" viewBox="0 0 16 16" width="1em"
			xmlns="http://www.w3.org/2000/svg">
			<g>
				<path v-for="( path, index) in paths" :key="index" :fill-rule="path.fillRule" :d="path.d" />
			</g>
		</svg>
		{{ text }}
	</div>
</template>

<script>
export default {
	name: 'JobDetailsItem',
	props: {
		icon: String,
		text: String,
		paths: []
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#job-details-item {
		font-size: 0.9em;
		color: var(--tertiary-color);
		margin-bottom: 0px !important;
		cursor: pointer;
	}

	#job-details-item:hover {
		color: var(--primary-color);
	}
	.b-icon {
		margin-right: 0.5rem;
	}
</style>