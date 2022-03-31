<template>
  <div class="container-fluid text-white">
    <div class="row">
      <div class="col">
        <a class="navbar-brand text-white" href="/" style="font-size: 300%;"
          >TwitterClone</a
        >
      </div>
      <div class="col-6">
          <form class="d-flex m-md-2 row">
            <b-textarea
              class="form-control mb-2 border-dark"
              type="textarea"
              placeholder="Type your message here!"
              aria-label="message"
              maxlength="300"
              rows="4"
              no-resize
              style="background-color: #011a32; color: #d4d4d4;"
            />
            <button class="btn btn-outline-success" type="submit">
              Post
            </button>
          </form>
        <div class="card m-md-2" style="background-color: #011a32;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
        <div class="card m-md-2" style="background-color: #011a32;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
        <div class="card m-md-2" style="background-color: #011a32;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
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
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
      </div>
    </div>
  </div>
</template>
