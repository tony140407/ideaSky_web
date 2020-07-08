<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <a href="#" class="logo">
        <img src="../assets/ideasky.png" alt="ideasky" />
      </a>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active href="#">Home</b-nav-item>
          <b-nav-item href="#">成員介紹</b-nav-item>
          <b-nav-item href="#">學生作品</b-nav-item>
          <b-nav-item href="#">空間設備</b-nav-item>
          <b-nav-item href="#">校正服務</b-nav-item>
          <b-nav-item-dropdown text="專案計畫" right>
            <b-dropdown-item href="#">空污物聯網</b-dropdown-item>
            <b-dropdown-item href="#">
              中大PM
              <sub>2.5</sub>防護網
            </b-dropdown-item>
            <b-dropdown-item href="#">
              7-SEAS PM
              <sub>2.5</sub> Network
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 100px;
}

.logo img {
  width: 100px;
  vertical-align: middle;
}
.bg-info {
  background-color: rgba(166, 216, 228, 0.6) !important;
}
em,
.nav-link {
  font-weight: 700 !important;
  color: rgba(255, 255, 255, 0.7) !important;
}
.active {
  color: #fff !important;
}
</style>
