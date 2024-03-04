<template>
  <div
    class="skill-tag justify-content-evenly align-items-center d-flex flex-wrap text-truncate"
    id="content"
    role="button"
  >
    <i class="fas fa-check-circle bi">
      <span class="pl-2">{{ text }}</span>
    </i>
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
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.2rem 0.5rem;
  width: fit-content;
}

.skill-tag {
  color: var(--tertiary-color);
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--tertiary-color);
  transition: all 0.3s ease-in-out;
  margin: 0.5rem 0.5rem 0.5rem 0;
  width: fit-content;
}

.skill-tag:hover {
  box-shadow: 0 0 5px 0 var(--tertiary-color);
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

h2,
p {
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  color: var(--tertiary-color);
}

h2:hover,
p:hover {
  color: var(--primary-color);
  transition: all 0.3s ease-in-out;
}
</style>
