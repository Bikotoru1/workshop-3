<template>
	<div class="skill-tag text-truncate border border-dark text-dark text-capitalize" id="content" role="button">
		<span></span>
		{{ text }}
	</div>
</template>

<script>
export default {
	name: 'JobRequirement',
	props: {
		text: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
	font-size: 0.8em;
	margin-bottom: 0px !important;
}

.skill-tag {
	border: 1px solid var(--primary-color);
	border-radius: 10px;
	font-size: 12px;
	color: var(--primary-color);
	text-transform: uppercase;
	-moz-text-align-last: left;
	text-align-last: left;
	display: inline-block;
	margin-right: 3px;
	margin-bottom: 3px;
	padding: 0 0.5rem;
	pointer-events: none;
	cursor: pointer;
	transition: all .2s ease;
	text-decoration: none !important;
	text-decoration-line: none;
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