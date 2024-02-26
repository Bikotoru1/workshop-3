<template>
	<div id="main-content">
		<img
			id="icon"
			height="70"
			:src="icon"
			alt="icon"
			width="70"
		/>

		<div id="container">
			<div id="name-and-requirements">
				<h2>{{ name }}</h2>

				<RequirementC
					v-for="(requirement, index) in requirements"
					:key="index"
					:text="requirement"
				/>
			</div>

			<DetailsC
				:company="company"
				:loction="loction"
				:salary="salary"
				:vacants="vacants"
				:creation-date="creationDate"
			/>
		</div>
	</div>
</template>

<script>
import RequirementC from "./JobRequirement.vue";
import DetailsC from "./JobDetails.vue";

export default {
	name: "JobListing",
	components: {
		RequirementC,
		DetailsC,
	},
	props: {
		icon: String,
		name: String,
		company: String,
		loction: String,
		salary: String,
		vacants: Number,
		creationDate: Date,
		requirements: [],
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-content{
	align-items		: center;
	background-color: var( --secondary-color 		);
	border-color	: var( --primary-color-color	);
	border-width	: 10px;
	color			: var( --primary-color-color	);
	display			: flex;
	flex-direction	: row;
	justify-content	: start;
	margin			: 15px;
	padding			: 5px;
	transition:  box-shadow 0.2s ease-in-out;
}

#main-content:hover{
	box-shadow: 10px 10px #ffffff50;	
}

#icon{
	margin: 10px;
}

#container{
	display			: flex;
	margin			: 10px;
	flex-direction	: column;
}

#name-and-requirements{
	display	: flex;
	margin	: 5px;
}
</style>