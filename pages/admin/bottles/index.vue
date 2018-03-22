<template>

  <section>
    <h3>List of all Bottles - {{allBottles.length}}</h3>

    <table>
      <thead>
      <tr>
        <td>Name</td>
        <td>Location</td>
        <td>User Message</td>
        <td>Moderated</td>
        <td></td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="bottle in allBottles">
        <td>{{bottle.userName}}</td>
        <td>{{bottle.userLocation}}</td>
        <td>{{bottle.userMessage}}</td>
        <td>{{bottle.moderated}}</td>
        <td><button @click="changeModerated(bottle._id)">☀</button></td>
      </tr>
      </tbody>
    </table>
  </section>

</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'bottlesIndex',
  data() {
    return {
      allBottles: [],
    };
  },
  methods: {
    changeModerated(messageId) {

      axios.post('/api/bottle/'+messageId, {
        messages: {
          moderated: true,
        },
      }).then((res) => {
        console.log(res.data);
      });
    },
  },
  beforeMount() {
    axios.get('/api/bottles/').then((res) => {
      this.allBottles = res.data;
    });
  },
};
</script>

<style scoped>
</style>
