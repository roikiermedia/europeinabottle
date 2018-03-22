<template>

  <section>
    <h3 v-on:click="counter += 1">List of all Bottles - {{counter}}</h3>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
      };
    },
  };
</script>

<style scoped>
</style>
