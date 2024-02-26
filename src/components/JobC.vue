<template>
	<div>
		<div class="card job-card mb-3 border">
			<div class="card-body p-2 p-md-3">
				<div class="row align-items-center">
					<div class="justify-content-center align-items-center col-md-1 col-3">
						<img 
							alt		="logo empresa" 
							class	="rounded"
							id		="icon"
							height	="70"
							:src	="icon" 
							width	="70"
						/>
					</div>

					<div class="col-md-11 col-9">
						<div class="row align-items-center">
							<div class="mb-2 col">
								<a 
									class	="text-dark stretched-link d-inline d-md-inline-flex"
									href	="#"
								>
									<h2 
										class	="job-title bold pl-md-2 pr-md-2 mb-0 pb-0"
										itemprop="title"
									>
										{{ name }}
									</h2>

									<section
										class	="pl-md-2 d-inline d-md-inline-flex align-items-center text-truncate"
										itemprop="skills"
									>
										<RequirementC 
											v-for	="( requirement, index ) in requirements" 
											:key	="index" 
											:text	="requirement"
										/>
									</section>
								</a>
							</div>
						</div>

						<DetailsC
							:company		="company"
							:loction		="loction"
							:salary			="salary"
							:vacants		="vacants"
							:creation-date	="creationDate"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import RequirementC from "./RequirementC.vue"
import DetailsC from "./DetailsC.vue"

export default {
  name: 'JobC',
  components:{
	RequirementC,
	DetailsC
  },
  props:{
	icon		: String,
	name		: String,
	company		: String,
	loction		: String,
	salary		: String,
	vacants		: Number,
	creationDate: Date,
	requirements: [],
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*#main-content{
	align-items		: center;
	background-color: var( --secondary-color 		);
	border-color	: var( --primary-color-color	);
	border-width	: 10px;
	color			: var( --primary-color-color	);
	display			: flex;
	flex-direction	: row;
	justify-content	: start;
	margin			: 5px;
	padding			: 5px;
}

#main-content:hover{
	box-shadow: 10px 10px #ffffff50;
}

#icon{
	margin: 10px;
}

#container{
	display			: inline flex;
	margin			: 10px;
	flex-direction	: column;
}

#name-and-requirements{
	display	: flex;
	margin	: 0;
	padding	: 0;
}*/
</style>