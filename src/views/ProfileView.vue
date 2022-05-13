<template>
  <div class="container text-white">
    <div class="row text-center">
      <div class="col m-md-4">
        <h1>Hallo {{ user.username }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5 class="text-center">Change your username here</h5>
        <form class="m-md-2" @submit.prevent="ChangeUsername">
          <input
            class="form-control me-2 bg-dark border-dark text-white"
            type="text"
            placeholder="New username"
            v-model="newUsername"
          />
          <button
            class="btn btn-outline-success mt-2"
            type="submit"
            style="width: 100%"
          >
            Change Username
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: [],
      newUsername: "",
    };
  },
  async created() {
    // Get the access token from the auth wrapper
    const token = await this.$auth.getTokenSilently();

    // Use Axios to make a call to the API
    axios
      .get(
        `${process.env.VUE_APP_API_BASEURL}Users/ById/${this.$auth.user.sub}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          this.user = response.data;
        }
      });
  },
  methods: {
    async ChangeUsername() {
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      this.object = await axios.post(
        `${process.env.VUE_APP_API_BASEURL}Users/ChangeUsername`,
        { Id: this.$auth.user.sub, Username: this.newUsername },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.$router.push({ name: "home" });
    },
  },
};
</script>