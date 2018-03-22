<template>
  <section>

    <!-- <button @click="testFillout">Fillout</button> -->

    <header class="card">
      <h1>#EUinaBottle</h1>
      <i>Tell your Story and connect with people everywhere in Europe.</i><br>
    </header>

    <main>
      <nuxt-child></nuxt-child>
    </main>

    <section class="card">
      <ul>
        <li>Send and receive bottles from all over Europe!</li>
        <li>Decide if you want to save the message or just throw it back into the waves.</li>
        <li>Tell your friends something about Europe and be surprised by all the stories you receive in return.</li>
        <li>Find out more about the European places the bottles come from.</li>
      </ul>
    
      <p style="margin-top: 42px;"> 
        <b>The idea</b><br>
          Europe is full of unique people, culture, languages, ideas and stories. Our mission is to connect people and their European stories, by exchanging thoughts and texts to show similarity and diversity. We connect Europeans from every corner of the continent by giving them the opportunity to send and receive digital messages in a bottle.<br>
        <br>
        <b>How does it work?</b><br>
          You start with an blank piece of paper, ready for your creativity, and throw this with your own personal note, idea, story, thoughts into our digital European ocean. You share your view from your location in the EU and you can see what’s in the bottle receive in return.<br>
        <br>
        <b>Why a bottle?</b><br>
          For generations, the idea of sending a message in a bottle has been an adventure full of hope and excitement. We are using this old idea and transforming it into a modern, digital adventure, by maintaining its cute retro charm and by making it accessible to for everyone online. <br>
        <br>
        <b>When and how can I start?</b><br>
          You can start right now! We provide you with a digital piece of paper, ready for your thoughts. Just write a message and we put it in a digital bottle for you! 
          You can start by telling people something about the village, city or region you are living in, your passions, your hobbies, or share stories about your country or daily life. It's up to you and your creativity!
          And after you send a bottle, you can receive one from somewhere in the EU!<br>
      </p>
      <nav>
        <nuxt-link to="/impressum">Impressum</nuxt-link>
      </nav>
    </section>

    <mgl-map class="map" :center="center" :zoom="zoom" :mapStyle="style"></mgl-map>
  </section>
</template>

<script>
import { MglMap } from 'vue-mapbox';

export default {
  scrollToTop: true,
  components: {
    MglMap,
  },
  data() {
    return {
      style: '/mapstyle.json',
      center: [9.44326, 54.81086],
      zoom: 15,
    };
  },
};
</script>

<style>
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

<style lang="scss" scoped>

</style>
