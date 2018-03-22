<template>
  <section class="card">
    <nuxt-link to="/" class="back">Back to Homepage</nuxt-link>
    <h3>EU in a Bottle Guidlines</h3>

    <ul>
      <li>Be awesome to each other!</li>
      <li>We are collecting your IP adress for statistics</li>
      <li>
        <nuxt-link to="/impressum">More Stuff</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'guidlines',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.back {
  display: block;
  padding-bottom: 12px;
}
</style>
