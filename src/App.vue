<template>
  <div id="app">
    <ul>
      <JobListing
        v-for="(job, index) in jobs"
        :key="index"
        :icon="job.icon"
        :name="job.name"
        :requirements="job.requirements"
        :company="job.company"
        :location="job.location"
        :salary="job.salary"
        :vacancies="job.vacancies"
        :creation-date="job.creationDate"
      />
    </ul>
  </div>
</template>

<script>
import JobListing from './components/JobListing.vue';

export default {
  components: {
    JobListing
  },
  data() {
    return {
      jobs: [
        {
          company: "Genuine Digital School",
          icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
          name: "Profesor De Matemáticas",
          location: "Remoto - Cualquier Lugar",
          salary: "Confidencial",
          vacancies: 1,
          creationDate: new Date(2004, 2, 22),
          requirements: ["Microsoft 365", "English C1", "Pedagogical Methodology"]
        },
        {
          company: "Genuine Digital School",
          icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
          name: "Profesor De Matemáticas",
          location: "Remoto - Cualquier Lugar",
          salary: "Confidencial",
          vacancies: 1,
          creationDate: new Date(2004, 2, 22),
          requirements: ["Microsoft 365", "English C1", "Pedagogical Methodology"]
        },
        {
          company: "Genuine Digital School",
          icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
          name: "Profesor De Matemáticas",
          location: "Remoto - Cualquier Lugar",
          salary: "Confidencial",
          vacancies: 1,
          creationDate: new Date(2004, 2, 22),
          requirements: ["Microsoft 365", "English C1", "Pedagogical Methodology"]
        },
        {
          company: "Genuine Digital School",
          icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
          name: "Profesor De Matemáticas",
          location: "Remoto - Cualquier Lugar",
          salary: "Confidencial",
          vacancies: 1,
          creationDate: new Date(2004, 2, 22),
          requirements: ["Microsoft 365", "English C1", "Pedagogical Methodology"]
        },
        {
          company: "Genuine Digital School",
          icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
          name: "Profesor De Matemáticas",
          location: "Remoto - Cualquier Lugar",
          salary: "Confidencial",
          vacancies: 1,
          creationDate: new Date(2004, 2, 22),
          requirements: ["Microsoft 365", "English C1", "Pedagogical Methodology"]
        },
      ]
    }  
  }
}
</script>
