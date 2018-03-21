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

		<div>
			<span>Your Twitter Handle: </span>
			<input v-model="userTwitterHandle" placeholder="@euinabottle">
		</div>

		<span>Write your bottle message:* </span>
		<p style="white-space: pre-line;">{{ userMessage }}</p>
		<textarea v-model="userMessage" placeholder="add multiple lines" maxlength="10000"></textarea>

		<br/>
		<input type="checkbox" id="checkbox" v-model="checked">* Please check that you are following <a href="#">Our Guidlines</a>

		<br/>
		<button @click="sendBottle" :disabled="!checked || userName == '' || userMessage == ''">Send your bottle away</button>

		<div v-if="messageSendSuccess">
			Hey, you just send your bottle and this is awesome! Some one else will be really happy hearing from you. Just give us a second to find your personal bottle.
		</div>

		<p v-else>
			You need to fill out your name and a message for sending your bottle away.
		</p>

    <bottle-history></bottle-history>
	</section>
</template>

<script>
import axios from '~/plugins/axios';
import BottleHistory from '~/components/bottleHistory.vue';

export default {
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
    };
  },
  methods: {
    sendBottle() {
      axios.post('/api/bottle', { message: {
        userName: this.userName,
        userLocation: this.userLocation,
        userMessage: this.userMessage,
        userTwitterHandle: this.userTwitterHandle,
      },
      })
      .then((res) => {
        // Save id from created bottle in a cookie
        this.updateCookie(res.data._id);
      });
      this.messageSendSuccess = true;
      this.getRandomBottle();
    },
    async getRandomBottle() {
      let message = await axios.get('/api/randommessage');
      this.$router.push(`/bottle/${message.data._id}`);
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
    testFillout() {
      this.userName = 'Beate Beispiel';
      this.userLocation = 'Hamburg, German';
      this.userMessage = new Date().getTime() + ' You are awesome! Hamburg is small cool border town in the centry of europe. Tschüß und Good Bye';
      this.userTwitterHandle = '@euinabottle';
    },
  },
}
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 50px;

  resize: none;
}
</style>
