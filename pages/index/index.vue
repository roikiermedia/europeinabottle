<template>
	<form class="card">

    <textarea v-model="userMessage" placeholder="Dear People of the european union..." maxlength="10000" class="content" required></textarea>
    <span>Grettings
      <span v-if="userLocation"> from </span>
      <span v-else>: </span>
      <input type="text" v-model="userLocation" placeholder="from..." class="location">
    </span>
    <input type="text" v-model="userName" placeholder="Your Name" class="signiture" required>
    <span class="post">P.s. You can also find me on Twitter @<input type="text" v-model="userTwitterHandle" placeholder="yourTwitterhandle" class="twitter"></span>

    <div class="guidelines">
      <input name="guidelines" id="guidelines" type="checkbox" v-model="checked" required>
      <label for="guidelines">* Please check that you are following <nuxt-link to="/guidelines">our Guidelines</nuxt-link>.</label>
    </div>

    <button type="submit" @click.prevent="sendBottle" :disabled="!checked || userName == '' || userMessage == ''">Throw your bottle into the sea!</button>

    <!-- <bottle-history></bottle-history> -->
	</form>
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
      this.nextStep();
    },
    nextStep() {
      this.$router.push('/flowing');
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
      this.userLocation = 'Hamburg, Germany';
      this.userMessage = new Date().getTime() + ' You are awesome! Hamburg is small cool border town in the centry of europe. Tschüß und Good Bye';
      this.userTwitterHandle = '@euinabottle';
    },
  },
}
</script>

<style lang="scss" scoped>
span, input, textarea {
  border: none;
  outline: none;
  background-color: transparent;
  
  font-size: 16px;
  font-family: monospace;
}

button {
  display: block;

  margin-top: 24px;
  margin-left: auto;
  margin-right: 0;
}

.content {
  min-height: 120px;
  width: 100%;

  overflow-y: auto;

  resize: vertical;
}
.signiture {
  width: 100%;

  font-size: 24px;
  font-family: cursive;
}
.post {
  position: relative;

  margin-top: 40px;

  font-size: 14px;
}
.guidelines {
  display: block;

  margin-top: 28px;
}
</style>
