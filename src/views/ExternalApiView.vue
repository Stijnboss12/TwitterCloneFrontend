<template>
  <div>
    <button @click="callApi">Call</button>
    <h1 class="textwhite">{{object}}</h1>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'external-api',
    data() {
        return {
            object: [],
        }
    },
    methods: {
      async callApi() {
        // Get the access token from the auth wrapper
        const token = await this.$auth.getTokenSilently();

        // Use Axios to make a call to the API
        this.object = await axios.post('https://localhost:7006/api/Posts/New', { Content: "hallo"}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }
  };
</script>