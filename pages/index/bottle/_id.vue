<template>
  <section class="card">
    <h3>Your Bottle Message</h3>
    <div>
      <p>{{bottleMessage.userName}} <span v-if="bottleMessage.userLocation">from {{bottleMessage.userLocation}} writes:</span></p>
    </div>

    <p>
      {{bottleMessage.userMessage}}
    </p>

    <span v-if="bottleMessage.userTwitterHandle">
      You can reach the creator of this Bottle Message on Twitter: {{bottleMessage.userTwitterHandle}}
    </span>

    <!-- <button>Download as image</button>
    <button>Rethrow the bottle</button>
    <button>Report the bottle</button> -->
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'singleBottle',
  async asyncData({params}) {
    let message = await axios.get('/api/bottle/' + params.id);
    return {
      bottleMessage: message.data,
    };
  },
};
</script>

<style scoped>
</style>
