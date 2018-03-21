<template>
  <section>

    <!-- <button @click="testFillout">Fillout</button> -->

    <main class="card">
      <nuxt-child></nuxt-child>
      <nuxt-link to="/impressum">Impressum</nuxt-link>
    </main>

    <mgl-map class="map" :center="center" :zoom="zoom" :mapStyle="style"></mgl-map>
  </section>
</template>

<script>
import { MglMap } from 'vue-mapbox';

export default {
  components: {
    MglMap,
  },
  data() {
    return {
      style: '/mapstyle.json',
      center: [9.594757, 54.859447],
      zoom: 15,
    };
  },
};
</script>

<style scoped>
.map {
  position: fixed;
  top: 0;
  z-index: 0;

  height: 100vh;
  width: 100vw;
}

.card {
  position: relative;
  z-index: 10;

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
