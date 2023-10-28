<template>
  <div class="formComponent">
    <form>
      <div>
        <label for="firstName">First name</label>
        <input type="text" id="firstName" v-model="user.name" :disabled="disabled" />
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" v-model="user.surname" :disabled="disabled" />
      </div>
      <div>
        <label for="studentCode">Student code</label>
        <input type="text" id="studentCode" v-model="user.code" :disabled="disabled" />
      </div>
      <div>
        <label for="loggedAt">Logged in at</label>
        <ul>
          <li>{{lastLogin}}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import {store} from '../store';

export default {
  computed: {
    lastLogin() {
      return store.user.time;
    }
  },
  props: {
    disabled: Boolean,
  },
  setup() {
    const user = ref(store.user);

    return {
      user,
    };
  },
};
</script>

<style scoped>
.formComponent {
  text-align: center;
  padding: 20px;
}

form {
  max-width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>