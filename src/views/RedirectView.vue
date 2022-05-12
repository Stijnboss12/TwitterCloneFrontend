<template>
  <h1 style="color: #d4d4d4">Please wait for a moment.</h1>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      object: [],
    };
  },
  async created() {
    // Get the access token from the auth wrapper
    const token = await this.$auth.getTokenSilently();

    // Use Axios to make a call to the API
    this.object = await axios.get("https://localhost:7006/api/Users/Login", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    this.$router.push({name: 'home'})
  },
};
</script>