<template>
  <section>

    <!-- <button @click="testFillout">Fillout</button> -->

    <main class="card">
      <nuxt-child></nuxt-child>
      <nav>
        <nuxt-link to="/impressum">Impressum</nuxt-link>
      </nav>
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

  max-width: 680px;

  margin: auto;
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 24px 24px;

  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  background-color: #ffffff;

  background-position: auto;
  background-origin: padding-box;
  background-clip: border-box;
  background-size: 100% 1.5em;
  background-image: linear-gradient(0deg, rgb(238,238,238) 0.1em, rgba(0,0,0,0) 0.1em);
}
@media (max-width: 700px) {
  .card {
    margin-left: 10px;
    margin-right: 10px;
  }
}

nav {
  margin-top: 24px;
}
</style>
