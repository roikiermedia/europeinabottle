<template>
  <section>
    <p> 
      <b> #EUinaBottle <br /> </b>
      <i> Tell your Story and connect with Europeans all over the world </i> <br />
      <ul>
	       <li> Send and receive bottles from all over Europe! </li>
	       <li> Decide if you want to save the message or just throw it back into the waves. </li>
	       <li> Follow your own bottles and see their adventures all across Europe. </li>
	       <li> Tell your friends something about Europe and be surprised by all the stories you receive in return. </li>
	       <li> Find out more about the European places the bottles come from. </li>
      </ul>
    </p>
    
    <!-- <button @click="testFillout">Fillout</button> -->

    <main class="card">
      <h1>Europe in a Bottle</h1>
      <span>Tell is your story about Europe and recieve unique messages when we launch.</span>

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

      <div><a href="impressum">Impressum</a></div>
    </main>

    <p>
      You need to fill out your name and a message for sending your bottle away.
    </p>
    
    <p> 
      <b>The idea </b> <br />
        Europe is full of unique people, culture, languages, ideas and stories. Our mission is to connect people and their European stories, by exchanging thoughts and texts to show similarity and diversity. We connect Europeans from every corner of the continent by giving them the opportunity to send and receive digital messages in a bottle. <br />
      <br>
      <b>How does it work?</b><br />
        You start with an blank piece of paper, ready for your creativity, and throw this with your own personal note, idea, story, thoughts into our digital European ocean. You share your view from your location in the EU and you can see what’s in the bottle receive in return.<br />
      <br>
      <b>Why a bottle?</b><br />
        For generations, the idea of sending a message in a bottle has been an adventure full of hope and excitement. We are using this old idea and transforming it into a modern, digital adventure, by maintaining its cute retro charm and by making it accessible to for everyone online. <br />
      <br>
      <b>When and how can I start?</b><br />
        You can start right now! We provide you with a digital piece of paper, ready for your thoughts. Just write a message and we put it in a digital bottle for you! 
        You can start by telling people something about the village, city or region you are living in, your passions, your hobbies, or share stories about your country or daily life. It's up to you and your creativity!
        And after you send a bottle, you can receive one from somewhere in the EU!<br />
    </p>

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
};
</script>

<style scoped>
.card {
  max-width: 720px;

  margin: auto;
  margin-top: 32px;
  padding: 8px 16px;

  border-radius: 2px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

textarea {
  width: 100%;
  height: 50px;

  resize: none;
}
</style>
