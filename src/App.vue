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
*:root {
  --primary-color: black;
  --secondary-color: white;
  --tertiary-color: gray;
}

body {
  background-color: var(--primary-color);
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  margin: 0px;
}
</style>
