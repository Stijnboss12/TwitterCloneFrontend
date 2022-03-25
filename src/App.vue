<template>
  <div id="app">
    <body style="background-color: #012549">
      <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">TwitterClone</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container-fluid">
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a v-if="$auth.isAuthenticated" class="nav-link" href="/profile">Profile</a>
                </li>
                <li class="nav-item">
                  <a v-if="!$auth.isAuthenticated" @click="login" class="btn btn-success">Log in</a>
                </li>
                <li class="nav-item">
                  <a v-if="$auth.isAuthenticated" @click="logout" class="btn btn-danger">Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <router-view />
    </body>
  </div>
</template>

<style>
@import "./assets/App.scss";
</style>

<script>
export default {
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
