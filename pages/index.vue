<template>
  <section>
    <button @click="testFillout">Fillout</button>
      <div v-if="messageSendSuccess" class="success">
        Hey, you just send your bottle and this is awesome! Some one else will be really happy hearing from you. Just give us a second to find your personal bottle.
      </div>


      <div v-if="errorMessage" class="error">
        You need to give us your name and your message. The message needs to be atleast 140 characters.
      </div>

      <div>
        <span>Your name:* </span>
          <input v-model="userName" name="userName" placeholder="Your Name!" required>
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
      <textarea v-model="userMessage" placeholder="S" required></textarea>

      <br/>
      <input type="checkbox" id="checkbox" v-model="checked">* Please check that you are following <a href="#">Our Guidlines</a>

      <br/>
      <button  @click="sendBottle">Send your bottle away</button>

      <p>
        You need to fill out your name and a message for sending your bottle away.
      </p>

      <bottle-history></bottle-history>

  </section>
</template>

<script>
import axios from '~/plugins/axios';
import BottleHistory from '~/components/bottleHistory.vue';

export default {
  name: 'index',
  components: {
    BottleHistory,
  },
  data() {
    return {
      userName: '',
      userLocation: '',
      userMessage: '',
      userTwitterHandle: '',
      checked: false,
      messageSendSuccess: false,
      errorMessage: false,
    };
  },
  methods: {
    sendBottle() {
      if (this.userName === '' || this.userMessage === '' || this.userMessage.length > 140) {
        this.errorMessage = true;
        return;
      }
      this.errorMessage = false;
      axios.post('/api/bottles', {
        message: {
          userName: this.userName,
          userLocation: this.userLocation,
          userMessage: this.userMessage,
          userTwitterHandle: this.userTwitterHandle,
        },
      }).then((res) => {
        // Save id from created bottle in a cookie
        this.updateCookie(res.data._id);
      });
      this.messageSendSuccess = true;
      // this.findNewBottle();
    },
    async findNewBottle() {
      let message = await axios.get('/api/randommessage');
      window.location.href = 'bottles/' + message.data._id;
    },
    testFillout() {
      this.userName = 'Beate Beispiel';
      this.userLocation = 'Hamburg, German';
      this.userMessage = new Date().getTime() + ' You are awesome! Hamburg is small cool border town in the centry of europe. Tschüß und Good Bye';
      this.userTwitterHandle = 'euinabottle';
    },
    updateCookie(newMessageId) {
      let localInfo = document.cookie;
      document.cookie = 'messageId=' + newMessageId + ',' + this.getCookie('messageId');
    },
    getCookie(cname) {
      // Todo: Make more beautiful and not use some random code, but it works!
      var name = cname + '=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
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
};
</script>

<style scoped>
</style>
