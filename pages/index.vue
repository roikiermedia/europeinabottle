<template>
  <section>

    <div>
      <span>Your name:* </span>
      <input v-model="userName" placeholder="Write your name">
    </div>

    <div>
      <span>Where are you from: </span>
      <input v-model="userLocation" placeholder="Write your location">
    </div>

    <span>What is your bottle message is:* </span>
    <p style="white-space: pre-line;">{{ userMessage }}</p>
    <br>
    <textarea v-model="userMessage" placeholder="add multiple lines"></textarea>

    <br/>
    <input type="checkbox" id="checkbox" v-model="checked">* Please check that you are following <a href="#">Our Guidlines</a>

    <br/>
    <button>Send your bottle away</button>

    <p>
      You need to fill out your name and a message for sending your bottle away.
    </p>

    <button @click="testpost">test post</button>
    <button @click="testget">test get</button>
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'index',
  data() {
    return {
      userName: '',
      userLocation: '',
      userMessage: '',
      checked: false,
    };
  },
  methods: {
    testpost() {
      axios.post('/api/message', { message: {
        userName: 'test',
        userLocation: 'betahaus HH',
        userMessage: 'hello world',
        userTwitterHandle: '@roikiermedia',
      },
      });
    },
    async testget() {
      let message = await axios.get('/api/randommessage');
      console.log(message.data);
    },
  },
};
</script>

<style scoped>
</style>
