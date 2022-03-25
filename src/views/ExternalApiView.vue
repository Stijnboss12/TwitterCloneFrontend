<template>
  <div>
    <button @click="callApi">Call</button>
    <h1>{{object}}</h1>
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
        this.object = await axios.get('https://localhost:7006/api/WeatherForecast', {
          headers: {
            Authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
          }
        });
      }
    }
  };
</script>