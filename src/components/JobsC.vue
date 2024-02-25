<template>
  <div id="main-content">
	<ul>
		<JobC
			v-for			="( job, index ) in jobs" 
			:key			="index"
			:icon			="job.icon"
			:name			="job.name"
			:requirements	="job.requirements"
			:company		="job.company"
			:loction		="job.location"
			:salary			="job.salary"
			:vacants		="job.vacants"
			:creation-date	="job.creationDate"
		/>
	</ul>
  </div>
</template>

<script>
import JobC from './JobC.vue'

export default {
  name: 'JobsC',
  components:{
	JobC
  },
  data(){
	return(
		{
			jobs: [
				{
					company		: "Genuine Digital School",
					icon		: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
					name		: "Profesor De Matemáticas",
					location	: "Remoto - Cualquier Lugar",
					salary		: "Confidencial",
					vacants		: 1,
					creationDate: new Date( 2004, 2, 22 ),
					requirements: [ "Microsoft 365", "English C1", "Pedagogical Methodology" ]
				}
			]
		}
	)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
