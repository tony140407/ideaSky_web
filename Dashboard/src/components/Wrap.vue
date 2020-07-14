<template>
  <div class="wrap">
    <div class="left">
      <LeftNav />
    </div>
    <div class="right">
      <RightContainer />
    </div>
  </div>
</template>
<script>
import LeftNav from "./LeftNav";
import RightContainer from "./RightContainer";

export default {
  components: {
    LeftNav,
    RightContainer
  }
};
</script>
<style scoped>
.wrap {
  display: flex;
}
.left {
  width: 76px;
  height: 100%;
  position: fixed;
  padding-top: 20px;
  background-color: #000033;
}
.right {
  /* rwd */
  margin-left: 76px;
  width: calc(100% - 76px);
}
@media screen and (max-width: 1000px) {
  .left {
    width: 50px;
  }
  .right {
    /* rwd */
    margin-left: 50px;
    width: calc(100% - 50px);
  }
}
</style>
