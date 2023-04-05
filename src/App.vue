<template>
  <form @submit.prevent="addData">
    <input type="text" v-model="name">
    <input type="text" v-model="email">
    <button type="submit">Add Data</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase/app';
import 'firebase/database';

export default {
  setup() {
    const name = ref('');
    const email = ref('');

    const addData = () => {
      const database = firebase.database();
      const newDataRef = database.ref('data').push();
      newDataRef.set({
        name: name.value,
        email: email.value
      }).then(() => {
        name.value = '';
        email.value = '';
        console.log('New data added successfully.');
      }).catch((error) => {
        console.error(error);
      });
    }

    return {
      name,
      email,
      addData
    }
  }
}
</script>