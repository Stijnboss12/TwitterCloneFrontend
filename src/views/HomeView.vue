<template>
  <div class="container-fluid text-white">
    <div class="row">
      <div class="col">
        <a class="navbar-brand text-white" href="/" style="font-size: 300%;"
          >TwitterClone</a
        >
      </div>
      <div class="col-6">
        <form class="d-flex m-md-2 row" @submit.prevent="CreatePost">
          <b-textarea
            class="form-control mb-2 border-dark"
            type="textarea"
            placeholder="Type your message here!"
            aria-label="message"
            maxlength="300"
            rows="4"
            v-model="Content"
            no-resize
            style="background-color: #011a32; color: #d4d4d4"
          />
          <button class="btn btn-outline-success" type="submit">Post</button>
        </form>
        <div v-for="post in Posts" :key="post.id">
          <div class="card m-md-2" style="background-color: #011a32;">
            <div class="card-body">
              <h5 class="card-title">{{ post.userId }}</h5>
              <p class="card-text">
                {{ post.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <form class="d-flex m-md-2">
          <input
            class="form-control me-2 bg-dark border-dark text-white"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
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
      Posts: [],
      Content: "",
    };
  },
  async created() {
    const token = await this.$auth.getTokenSilently();

    axios
      .get(`${process.env.VUE_APP_API_BASEURL}Posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          this.Posts = response.data;
        }
      });
  },
  methods: {
    async CreatePost() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      this.object = await axios.post(
        `${process.env.VUE_APP_API_BASEURL}Posts/New`,
        { Content: this.Content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
    },
  },
};
</script>
