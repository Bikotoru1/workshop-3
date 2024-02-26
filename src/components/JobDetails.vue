<template>
	<div id="job-details">
		<div class="item">
			<svg class="icon"></svg>
			<span class="text">{{ company }}</span>
		</div>

		<div class="item">
			<svg class="icon"></svg>
			<span class="text">{{ location }}</span>
		</div>

		<div class="item">
			<svg class="icon"></svg>
			<span class="text">{{ salary }}</span>
		</div>

		<div class="item">
			<svg class="icon"></svg>
			<span class="text">{{ vacancies }}</span>
		</div>

		<div class="item">
			<svg class="icon"></svg>
			<span class="text">{{ formattedCreationDate }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'JobDetails',
	props: {
		company: String,
		location: String,
		salary: String,
		vacancies: Number,
		creationDate: Date
	},
	computed: {
		formattedCreationDate() {
			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			return this.creationDate.toLocaleDateString(undefined, options);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#job-details {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: fit-content;
}

.item {
	display: flex;
	align-items: center;
	margin: auto;
	padding: 5px;
	width: fit-content;
}

.text {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 16px;
	margin: auto;
	padding: 5px;
	transition: all 0.2s ease-in-out;
}

.text:hover {
	font-size: 16px;
	color: var(--primary-color);
}


.icon {
	height: 20px;
	width: 20px;
	margin: auto;
	padding: 5px;
}
</style>