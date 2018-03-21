<template>
  <section>
    <h3>Your Bottle Message</h3>
    <div>
      <p>{{bottleMessage.userName}} <span v-if="bottleMessage.userLocation">from {{bottleMessage.userLocation}} writes:</span></p>
    </div>

    <div>
      {{bottleMessage.userMessage}}
    </div>

    <div v-if="bottleMessage.userTwitterHandle">
      You can reach the creator of this Bottle Message on Twitter @{{bottleMessage.userTwitterHandle}}
    </div>

    <button>Download as image</button>
    <button>Rethrow the bottle</button>
    <button>Report the bottle</button>
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'singleBottle',
  data() {
    return {
      bottleMessage: '',
    };
  },
  methods: {
    async getBottle() {
      let message = await axios.get('/api/bottles/' + this.$route.params.id);
      this.bottleMessage = message.data;
    },
  },
  beforeMount() {
    this.getBottle();
  },
};
</script>

<style scoped>
</style>
