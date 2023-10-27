<template>
  <div class="songList">
    <SongFilterComponent @filterChanged="applyFilter" />
    <table>
      <thead>
        <tr>
          <th @click="sortName">Name</th>
          <th @click="sortArtist">Artist</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in filteredSongs" :key="song.name">
          <td>{{ song.name }}</td>
          <td>{{ song.artist }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import {store} from '../store.js'; 

export default {
  setup() {
    const songs = ref(store.all_songs);
    const activeFilter = ref('None');
    let originalSongs = [...songs.value]; 

    onMounted(() => {
      originalSongs = [...songs.value];
    });

    const sortName = () => {
      songs.value.sort((a, b) => a.name.localeCompare(b.name));
      applyFilter(activeFilter.value);
    };

    const sortArtist = () => {
      songs.value.sort((a, b) => a.artist.localeCompare(b.artist));
      applyFilter(activeFilter.value); 
    };

    const applyFilter = (filter) => {
      activeFilter.value = filter;

      if (filter === 'Name') {
        songs.value.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter === 'Artist') {
        songs.value.sort((a, b) => a.artist.localeCompare(b.artist));
      } else if (filter === 'None') {
        songs.value = [...originalSongs];
      }
    };

    const filteredSongs = computed(() => {
      if (activeFilter.value === 'Name') {
        return [...songs.value].sort((a, b) => a.name.localeCompare(b.name));
      } else if (activeFilter.value === 'Artist') {
        return [...songs.value].sort((a, b) => a.artist.localeCompare(b.artist));
      } else {
        return [...songs.value];
      }
    });

    return {
      activeFilter,
      sortName,
      sortArtist,
      applyFilter,
      filteredSongs,
    };
  },
};
</script>

<style>
.songList {
  text-align: center;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

</style>