<template>
  <div id="job-listing">
    <div class="card mb-3 border" id="job-card">
      <div class="card-body p-3" id="job-card-body">
        <div class="row align-items-center">
          <div class="col-md-2 col-4 text-center">
            <img
              alt="logo empresa"
              class="rounded img-fluid"
              id="icon"
              height="70"
              :src="icon"
              width="70"
            />
          </div>

          <div class="col-md-10 col-8">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center mb-2"
            >
              <a
                class="text-dark d-flex flex-wrap text-decoration-none"
                href="#"
              >
                <h2 class="font-weight-bold" itemprop="title" id="job-title">
                  {{ name }}
                </h2>

                <section
                  class="pl-2 d-flex flex-wrap align-items-center"
                  itemprop="skills"
                >
                  <JobRequirement
                    v-for="(requirement, index) in requirements"
                    :key="index"
                    :text="requirement"
                  />
                </section>
              </a>
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
      </div>
    </div>
  </div>
</template>

<script>
import JobRequirement from "./JobRequirement.vue";
import JobDetails from "./JobDetails.vue";

export default {
  name: "JobMainContent",
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
    requirements: [],
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#job-listing {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: calc(100% - 1rem) !important;
}

#job-card {
  margin: auto;
  background-color: rgb(204, 204, 204);
  transition: all 0.3s ease-in-out;
  /* Relative width */
  width: 100%;
}

#job-card-body {
  transition: all 0.3s ease-in-out;
}

#job-card-body:hover {
  box-shadow: 5px 5px 5px var(--secondary-color);
}

#job-title {
  margin: 10px;
  font-size: 1.1rem;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: var(--tertiary-color);
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  text-align: start;
}

#job-title:hover {
  color: var(--primary-color) !important;
  transform: scale(1.05);
  margin: calc(10px  + 0.05rem);
  transition: all 0.3s ease-in-out;
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
