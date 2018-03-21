<template>
  <section>
    <button @click="testFillout">Fillout</button>
    <div>
      <span>Your name:* </span>
      <input v-model="userName" placeholder="Write your name">
    </div>

    <div>
      <span>Where are you from: </span>
      <input v-model="userLocation" placeholder="Write your location">
    </div>

    <div>
      <span>Your Twitter Handle: </span>
      <input v-model="userTwitterHandle" placeholder="@euinabottle">
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
      userTwitterHandle: '',
      checked: false,
    };
  },
  methods: {
    testpost() {
      axios.post('/api/message', { message: {
        userName: this.userName,
        userLocation: this.userLocation,
        userMessage: this.userMessage,
        userTwitterHandle: this.userTwitterHandle,
      },
      });
      console.log('Send');
    },
    async testget() {
      let message = await axios.get('/api/randommessage');
      console.log(message.data);
    },
    testFillout() {
      this.userName = 'Beate Beispiel';
      this.userLocation = 'Hamburg, German';
      this.userMessage = 'You are awesome! Hamburg is small cool border town in the centry of europe. Tschüß und Good Bye';
      this.userTwitterHandle = '@euinabottle';
    },
  },
};
</script>

<style scoped>
</style>
