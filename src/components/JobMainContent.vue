<template>
	<div id="div1">
		<div id="div2" class="card mb-3 border">
			<div id="div3" class="card-body p-2 p-md-3">
				<div id="div4" class="row align-items-center">
					<div class="justify-content-center align-items-center col-md-1 col-3">
						<img alt="logo empresa" class="rounded" id="icon" height="70" :src="icon" width="70" />
					</div>

					<div class="col-md-11 col-9">
						<div class="row align-items-center">
							<div class="mb-2 col">
								<a class="text-dark stretched-link d-inline d-md-inline-flex" href="#">
									<h2 id="job-title" class="bold pl-md-2 pr-md-2 mb-0 pb-0" itemprop="title">
										{{ name }}
									</h2>

									<section class="pl-md-2 d-inline d-md-inline-flex align-items-center text-truncate" itemprop="skills">
										<JobRequirement v-for="( requirement, index ) in requirements" :key="index" :text="requirement" />
									</section>
								</a>
							</div>
						</div>

						<JobDetails :company="company" :location="location" :salary="salary" :vacancies="vacancies"
							:creation-date="creationDate" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import JobRequirement from "./JobRequirement.vue"
import JobDetails from "./JobDetails.vue"

export default {
	name: 'JobMainContent',
	components: {
		JobRequirement,
		JobDetails
	},
	props: {
		icon: String,
		name: String,
		company: String,
		location: String,
		salary: String,
		vacancies: Number,
		creationDate: Date,
		requirements: [],
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#div1 {
	transition: box-shadow 0.2s ease-in-out !important;
}

#div1:hover {
	box-shadow: 0 0 10px var(--tertiary-color) !important;
	cursor: default !important;
}

#job-title {
	margin: auto !important;
	font-size: 1.3rem !important;
	display: inline-block !important;
	padding: 5px !important;
	transition: all 0.3s ease-in-out !important;
	text-decoration: none !important;
}

#job-title:hover {
	font-size: 1.4rem !important;
	color: var(--tertiary-color) !important;
}

.bold,
.bolder,
b {
	font-family: "Montserrat", "Roboto", sans-serif;
}

.bold,
b {
	font-weight: 600 !important;
	-webkit-font-smoothing: antialiased;
}
</style>