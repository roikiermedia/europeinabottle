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
	</section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
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
      axios.post('/api/message', { message: {
        userName: this.userName,
        userLocation: this.userLocation,
        userMessage: this.userMessage,
        userTwitterHandle: this.userTwitterHandle,
      },
      });
      console.log('Send');
      this.messageSendSuccess = true;
    },
    async testget() {
      let message = await axios.get('/api/randommessage');
      console.log(message.data);
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
