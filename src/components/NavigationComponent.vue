<template>
  <nav id="navigaton" v-if="store.is_authenticated">
    <ol>
      <li v-for="(link, index) in routes" :key="index">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
import { store } from '../store';

export default {
  data() {
    return {
      routes: [
        {
          name: 'Home',
          path: '/home'
        },
        {
          name: 'About me',
          path: '/about-me'
        }
      ],
      store
    }
  },
}
</script>

<style>
#navigaton {
  border-radius: 25px;
  padding: 1rem;
  background: #b17dff;
}

li {
  background: #ece0ff;
}

ol {
  list-style-type: none;
  padding: 0px;
}

a {
  display: block;
  padding: 10px;
  margin-bottom: 5px;
  font-weight: 800;
  text-decoration: none;
}
</style>