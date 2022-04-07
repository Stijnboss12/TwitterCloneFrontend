<template>
  <div id="app">
    <body style="background-color: #012549; margin-bottom: 60px">
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
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item me-2">
                  <a
                    class="btn btn-secondary"
                    id="topbutton"
                    style="display: none;"
                    @click="topFunction"
                    >Back to Top</a
                  >
                </li>
                <li class="nav-item me-2">
                  <a
                    v-if="$auth.isAuthenticated"
                    class="btn btn-primary"
                    @click="$router.push({ name: 'profile' })"
                    >Profile</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    v-if="!$auth.isAuthenticated"
                    @click="login"
                    class="btn btn-success"
                    >Log in</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    v-if="$auth.isAuthenticated"
                    @click="logout"
                    class="btn btn-danger"
                    >Log out</a
                  >
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
  mounted: function () {
    const mybutton = document.getElementById("topbutton");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    topFunction() {
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>
