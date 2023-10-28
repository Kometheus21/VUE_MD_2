<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.svg" />
      <h2>KRAKEN.FM</h2>
    </div>
    <div>
      <div v-if="store.isLoggedIn" class="user">
        <span class="avatar"></span>
        <h3>{{ fullName }}</h3>
      </div>
      <button @click="store.loginManager()">{{ store.isLoggedIn ? 'LOGOUT' : 'LOGIN' }}</button>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  
  data() {
    return {
      store
    }
  },
  computed: {
    fullName() {
      return `${store.user.name} ${store.user.surname}`;
    }
  }
}
</script>

<style>
.header {
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #8645E8;
}

.logo {
  display: flex;
  align-items: flex-end;
  
}

.user {
  
  display: flex;
  align-items: center;
}

.avatar {
  height: 35px;
  width: 35px;
  border-radius: 100%;
  border: 1px solid #000000;
  background-color: #45e8a4;
  
}

h3 {
  font-weight: 800;
  
}

button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
}
</style>