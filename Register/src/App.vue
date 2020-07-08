<template>
  <div id="app">
    <Navbar />
    <div class="flex">
      <Register />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Register from "./components/Register";

export default {
  name: "App",
  components: {
    Register,
    Navbar
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
  padding-bottom: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
