<template>
	<div 
		class	="skill-tag text-truncate border border-dark text-dark text-capitalize"
		id		="content"
		role	="button"
	>
		<span></span>
		{{ text }}
	</div>
</template>

<script>
export default {
	name: 'RequirementC',
	props:{
		text: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content{
	font-size		: 0.8em;
	margin-bottom	: 0px !important;
}
</style>