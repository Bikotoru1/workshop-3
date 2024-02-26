<template>
	<div id="job-listing">
		<img
			id="icon"
			height="70"
			:src="icon"
			alt="icon"
			width="70"
		/>

		<div id="container">
			<div id="name-and-requirements">
				<h2 id="name">{{ name }}</h2>

				<JobRequirement
					v-for="(requirement, index) in requirements"
					:key="index"
					:text="requirement"
				/>
			</div>

			<JobDetails
				:company="company"
				:location="location"
				:salary="salary"
				:vacancies="vacancies"
				:creation-date="creationDate"
			/>
		</div>
	</div>
</template>

<script>
import JobRequirement from "./JobRequirement.vue";
import JobDetails from "./JobDetails.vue";

export default {
	name: "JobListing",
	components: {
		JobRequirement,
		JobDetails,
	},
	props: {
		icon: String,
		name: String,
		company: String,
		location: String,
		salary: String,
		vacancies: Number,
		creationDate: Date,
		requirements: Array,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#job-listing {
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	align-self: center;
	background-color: var(--secondary-color);
	border-color: var(--primary-color);
	border-width: 10px;
	color: var(--tertiary-color);
	margin: 15px;
	padding: 5px;
	/* box-shadow: 0 0 10px var(--secondary-color); */
	transition: box-shadow 0.2s ease-in-out;
}

#job-listing:hover {
	box-shadow: 0 0 10px var(--secondary-color);
}


#icon {
	filter: drop-shadow(0 0 5px var(--tertiary-color));
	margin: auto;
	padding: 20px;
}

#container {
	display: flex;
	margin: 10px;
	flex-direction: column;
}

#name-and-requirements {
	display: flex;
	margin: 5px;
}

#name {
	margin: auto;
	padding: 5px;
	transition: all 0.3s ease-in-out;
}

#name:hover {
	font-size: 20.2px;
	color: var(--primary-color);
}
</style>