<template>
  <div class="aboutMe">
    <h1>ABOUT ME</h1>
    <button @click="toggleFormEditing">{{ editFormButtonLabel }}</button>
    <FormComponent :disabled="isFormDisabled" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AboutMeComponent',
  setup() {
    const isFormEditing = ref(false);

    const toggleFormEditing = () => {
      isFormEditing.value = !isFormEditing.value;
    };

    return {
      isFormEditing,
      toggleFormEditing,
    };
  },
  computed: {
    editFormButtonLabel() {
      return this.isFormEditing ? 'CANCEL' : 'EDIT FORM';
    },
    isFormDisabled() {
      return !this.isFormEditing;
    },
  },
};
</script>

<style scoped>
.aboutMe {
  text-align: center;
  padding: 20px;
  height: 882px;
  background-color: #d2b3ff;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
}

button.cancel {
  background-color: #e74c3c;
}
</style>