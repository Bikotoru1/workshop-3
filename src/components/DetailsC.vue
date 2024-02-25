<template>
  <div id="main-content">
	<div class="item">
		<!--<svg class="icon"></svg>-->
		<span class="text">{{ company }}</span>
	</div>

	<div class="item">
		<!--<svg class="icon"></svg>-->
		<span class="text">{{ loction }}</span>
	</div>

	<div class="item">
		<!--<svg class="icon"></svg>-->
		<span class="text">{{ salary }}</span>
	</div>

	<div class="item">
		<!--<svg class="icon"></svg>-->
		<span class="text">{{ vacants }}</span>
	</div>

	<div class="item">
		<!--<svg class="icon"></svg>-->
		<span class="text">{{ creationDate }}</span>
	</div>
  </div>
</template>

<script>
export default {
  name: 'DetailsC',
  props:{
	company		: String,
	loction		: String,
	salary		: String,
	vacants		: Number,
	creationDate: Date
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-content{
	align-content	: center;
	display			: flex;
	justify-content	: center;
	flex-direction	: row;
}

.icon{
	margin: 10px;
}
</style>