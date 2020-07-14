<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <a href="#" class="logo">
        <img class="ideaSky_logo" src="../../assets/ideasky_resized.svg" />
      </a>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Sites Status" right id="a123">
            <b-dropdown-item href="#">General</b-dropdown-item>
            <b-dropdown-item href="#">Machine Info</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Hi, {{props_user}}</b-nav-item>
            <b-nav-item href="#">Display Page</b-nav-item>
            <b-nav-item href="#">Log out</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: {
    props_user: String
  },
  data: function() {
    return {
      user: "username"
    };
  }
  // created: function() {
  //   this.props_user=
};
</script>
<style scoped>
.navbar {
  height: 100px;
}

/* 縮小後的burger */
.navbar-toggler {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
  top: -3px;
}

.navbar-dark .navbar-nav .nav-link {
  color: #0066cc !important;
}
.bg-info {
  background-color: #f3ffff !important;
}
.ideaSky_logo {
  height: 56px;
}
@media screen and (max-width: 991px) {
  .nav-link,
  .navbar-nav {
    background-color: #f3ffff;
  }
  .navbar-nav > li > a {
    color: #111 !important;
  }
  .dropdown-toggle {
    text-decoration: aqua;
    color: #111 !important;
  }
}
@media screen and (max-width: 1000px) {
  .navbar {
    height: 50px;
  }
  .ideaSky_logo {
    height: 28px;
  }
}
</style>