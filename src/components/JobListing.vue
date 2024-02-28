<template>
	<div id="div1" class="mx-auto container-fluid">
		<div id="div2" clss="row mt-2 no-gutters">
			<div id="div3" class="px-0 col-10">
				<ul id="ul1" >
					<JobMainContent
						v-for						="( job, index ) in jobs" 
						:key						="index"
						:icon						="job.icon"
						:name						="job.name"
						:requirements		="job.requirements"
						:company				="job.company"
						:location				="job.location"
						:salary					="job.salary"
						:vacancies			="job.vacancies"
						:creation-date	="job.creationDate"
					/>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import JobMainContent from "./JobMainContent.vue";

export default {
	name: "JobListing",
	components: {
		JobMainContent
	},
	props: {
		jobs: []
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>