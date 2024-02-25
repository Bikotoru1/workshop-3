<template>
  <div id="main-content">{{ text }}</div>
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
#main-content{
	border-color	: var( --primary-color-color );
	border-style	: solid;
	border-width	: 1px !important;
	border-radius	: 10px;
	color			: var( --primary-color-color	);
	margin			: 5px;
}
</style>