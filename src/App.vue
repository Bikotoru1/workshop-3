<template>
  <div id="jobs">
    <JobsC />
  </div>
</template>

<script>
import JobsC from './components/JobsC.vue'

export default {
  name: 'App',
  components: {
    JobsC
  }
}
</script>

<style>
*:root{
	--primary-color		: black;
	--secondary-color	: white;
	--tertiary-color	: gray;
}

*, :before, :after{
	box-sizing: border-box;
}

body{
	background-color: var( --primary-color );
	margin			: 0;
	padding			: 0;
}

#app {
  font-family				: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing	: antialiased;
  -moz-osx-font-smoothing	: grayscale;
  text-align				: center;
  background-color			: var( --primary-color );
  color						: var( --secondary-color );
  margin					: 0px;
}

div{
	display: block;
}

.row{
	display		: flex;
	flex-wrap	: wrap;
	margin-right: -15px;
    margin-left	: -15px;
}

.no-gutters{
	margin-left	: 0;
	margin-right: 0;
}

.card {
    position		: relative;
    display			: flex;
    flex-direction	: column;
    min-width		: 0;
    word-wrap		: break-word;
    background-color: #fff;
    background-clip	: border-box;
    border			: 1px solid rgba( 0,0,0,.125 );
    border-radius	: 0.25rem;
}

.card-body {
    flex		: 1 1 auto;
    min-height	: 1px;
    padding		: 1.25rem;
}

.col-12{
	flex		: 0 0 100%;
	max-width	: 100%;
}

.p-2{
	padding: 0.5rem !important;
}

.p-md-3{
	padding: auto;
}

.pl-0, .px-0{
	padding-left: 0 !important;
}

.pr-0, .px-0{
	padding-right: 0 !important;
}

.col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-auto, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-auto, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-auto, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-auto {
    position		: relative;
    width			: 100%;
    padding-right	: 15px;
    padding-left	: 15px;
}

.border{
	border: 1px solid #dee2e6 !important;
}

.mb-3, my-3{
	margin-bottom: 1rem !important;
}
</style>
