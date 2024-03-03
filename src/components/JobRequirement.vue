<template>
  <div
    class="skill-tag text-truncate justify-content-evenly"
    id="content"
    role="button"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "JobRequirement",
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 0.7em;
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.2rem 0.5rem;
}

.skill-tag {
  color: var(--tertiary-color);
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--tertiary-color);
  transition: all 0.3s ease-in-out;
  margin: 0.5rem 0.5rem 0.5rem 0;
}

.skill-tag:hover {
  box-shadow: 0 0 5px 0 var(--tertiary-color);
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  cursor: pointer;
}

h2,
p {
  margin: auto;
}
</style>
