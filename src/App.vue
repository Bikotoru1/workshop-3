<template>
	<div id="app">
		<ul class="row mt-2 no-gutters px-0 col-10">
			<JobListing :jobs="jobs" />
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
					name: "Coordinador de Tecnología Educativa",
					location: "Remoto - Cualquier Lugar",
					salary: "Confidencial",
					vacancies: 1,
					creationDate: new Date("2024-02-28T11:09:03.738Z"),
					requirements: ["Power Bi", "Power Apps", "Microsoft 365"]
				},
				{
					company: "Genuine Digital School",
					icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
					name: "Profesor De Portugués",
					location: "Remoto en Brazil",
					salary: "Confidencial",
					vacancies: 1,
					creationDate: new Date("2024-02-27T11:09:03.738Z"),
					requirements: ["Educación Virtual", "Microsoft Teams", "Portugés"]
				},
				{
					company: "Genuine Digital School",
					icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
					name: "Profesor de tecnologéa",
					location: "Remoto",
					salary: "Confidencial",
					vacancies: 1,
					creationDate: new Date("2024-02-27T11:09:03.738Z"),
					requirements: ["AWS", "Software Development", "Project Leadership"]
				},
				{
					company: "Genuine Digital School",
					icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
					name: "Líder de tecnologéa",
					location: "Remoto",
					salary: "Confidencial",
					vacancies: 1,
					creationDate: new Date("2024-02-27T11:09:03.738Z"),
					requirements: ["AWS", "Software Development", "Project Leadership"]
				},
				{
					company: "Genuine Digital School",
					icon: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/530708/Logo-Genuine-Digital-School.jpg",
					name: "Apoyo Técnico",
					location: "Remoto en Brazil",
					salary: "Confidencial",
					vacancies: 1,
					creationDate: new Date("2024-02-27T11:09:03.738Z"),
					requirements: ["Microsoft 365", "English C1", "Pedagogical Methodology"]
				},
			]
		}
	}
}
</script>

<style>
*:root {
	--primary-color: black;
	--secondary-color: white;
	--tertiary-color: gray;
}

.b-icon.bi {
	display: inline-block;
	overflow: visible;
	vertical-align: -0.15em;
}

*,
:after,
:before {
	box-sizing: border-box;
}

.flex-column {
	flex-direction: column !important;
}

.row {
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
}

.flex-md-row {
	flex-direction: row !important;
}

.pl-md-2,
.px-md-2 {
	padding-left: 0.5rem !important;
}

.pr-md-2,
.px-md-2 {
	padding-right: 0.5rem !important;
}

.pb-0,
.py-0 {
	padding-bottom: 0 !important;
}

.mb-0,
.my-0 {
	margin-bottom: 0 !important;
}

.h2,
h2 {
	font-size: 2rem;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin-bottom: 0.5rem;
	font-weight: 500;
	line-height: 1.2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
	margin-bottom: 0.5rem;
}

.text-capitalize {
	text-transform: capitalize !important;
}

.text-truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.col {
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
}

.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}
</style>