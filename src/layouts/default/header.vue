<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <router-link to="/" class="uk-card-title">
            Dashboard
          </router-link>
        </li>
        <li>
          <a href="#">SCHEDULES</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active">
                <a href="#">Current</a>
              </li>
              <li>
                <a href="#">Pass</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">FREINDS</a>
        </li>
      </ul>
    </div>

    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <a href="#">MY ACCOUNT</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-active">
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Setting</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .uk-navbar-container {
    background: #3c495e;
    height: 60px;
    border-top: 3px solid #53ba82;

    .uk-navbar-nav {
      > .uk-active {
        a {
          color: #53ba82;
        }
      }

      a {
        color: #dde1e9;
      }
    }
  }
</style>
