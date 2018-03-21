<template>
  <section>
    <!-- <button @click="testpost">test post</button>
    <button @click="testget">test get</button> -->

    <mgl-map class="map" :center="center" :zoom="zoom" :mapStyle="style">
      <mgl-navigation-control position="top-right"/>
      <mgl-geolocate-control position="top-right"/>
    </mgl-map>
  </section>
</template>

<script>
import axios from '~/plugins/axios';
import { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker } from 'vue-mapbox';

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker,
  },
  data() {
    return {
      style: '/mapstyle.json',
      center: [9.43564, 54.7886],
      zoom: 14,
    };
  },
  methods: {
    testpost() {
      axios.post('/api/message', { message: {
          userName: 'test',
          userLocation: 'betahaus HH',
          userMessage: 'hello world',
          userTwitterHandle: '@roikiermedia',
        }
      });
    },
    async testget() {
      let message = await axios.get('/api/randommessage');
      console.log(message.data);
    }
  },
};
</script>

<style scoped>
.map {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
