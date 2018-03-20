<template>
  <section>
    <button @click="testpost">test post</button>
    <button @click="testget">test get</button>
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
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
</style>
