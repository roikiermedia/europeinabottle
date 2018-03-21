<template>
  <section>
    <!-- <button @click="testFillout">Fillout</button> -->

    <main class="card">
      <nuxt-child></nuxt-child>
      <nuxt-link to="/impressum">Impressum</nuxt-link>
    </main>

  </section>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style scoped>
.card {
  max-width: 720px;

  margin: auto;
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 8px 16px;

  border-radius: 2px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>
