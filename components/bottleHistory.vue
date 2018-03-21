<template>
  <section>
    <h3>Bottle History</h3>
    <ul>
      <li v-for="bottle in bottles" :key="bottle._id">{{bottle.userMessage}}</li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'bottleHistory',
  data() {
    return {
      bottles: [],
    };
  },
  methods: {
    cookieToBottles() {
      const bottleIds = this.getCookie('messageId').split(',');
      bottleIds.forEach((bottleId) => {
        if (bottleId !== '') {
          axios.get('/api/bottle/' + bottleId).then((res) => {
            this.bottles.push(res.data);
          });
        }
      });
    },
    getCookie(cname) {
      // Todo: Make more beautiful and not use some random code, but it works!
      var name = cname + '=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    },
  },
  beforeMount() {
    this.cookieToBottles();
  },
};
</script>
