<template>
  <div id="app">
    <Navbar />
    <div class="flex">
      <Login />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Navbar,
    Login
  }
};
</script>

<style>
#app {
  height: calc(100%);
  background: url("https://picsum.photos/1200/900?random=10") no-repeat center
    center / cover;
}
.flex {
  margin-top: 100px;
  padding-bottom: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
