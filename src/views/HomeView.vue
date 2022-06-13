<template>
  <div class="container-fluid text-white">
    <div class="row">
      <div class="col m-md-2">
        <a class="navbar-brand text-white row" href="/" style="font-size: 300%"
          >TwitterClone</a
        >
        <button class="btn btn-outline-danger row" @click="GetError()">
          Get Error
        </button>
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
          <div class="card m-md-2 bgdark">
            <div class="card-body row">
              <h5 class="card-title col">{{ post.username }}</h5>
              <h6 class="card-subtitle text-muted col text-end">
                UTC: {{ post.postedOn | luxon }}
              </h6>
              <p class="card-text">
                {{ post.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <form class="d-flex m-md-2" @submit.prevent="Search">
          <input
            class="form-control me-2 bg-dark border-dark text-white"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="SearchContent"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div v-for="result in SearchResult" :key="result.id">
          <div class="card m-md-2 bgdark">
            <div class="card-body row">
              <p class="card-text col m-md-2">{{ result.username }}</p>
              <button
                class="btn btn-success col m-md-1"
                @click="FollowUser(result.id)"
              >
                Volgen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../assets/App.scss";
export default {
  data() {
    return {
      Posts: [],
      Content: "",
      SearchContent: "",
      SearchResult: [],
    };
  },
  async created() {
    this.GetPosts();
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
      // Reload the posts
      this.GetPosts();
    },
    async GetPosts() {
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
    async Search() {
      const token = await this.$auth.getTokenSilently();

      axios
        .get(
          `${process.env.VUE_APP_API_BASEURL}Users/ByUsername/${this.SearchContent}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            this.SearchResult = response.data;
          }
        });
    },
    async FollowUser(id) {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      this.object = await axios.post(
        `${process.env.VUE_APP_API_BASEURL}Users/Subscribe`,
        { SubscribedId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Reload the posts
      this.GetPosts();
    },
    async GetError() {
      const token = await this.$auth.getTokenSilently();

      axios
        .get(
          `${process.env.VUE_APP_API_BASEURL}Posts/ErrorEndpoint`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data)
          }
        });
    },
  },
};
</script>
