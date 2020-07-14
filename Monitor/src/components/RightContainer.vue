
<template>
  <div class="right_container">
    <Navbar props_user="test123" />
    <div class="flex_center">
      <div class="inside">
        <CardGroup />
        <DeviceManager />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./rightContainer/Navbar";
import CardGroup from "./rightContainer/CardGroup";
import DeviceManager from "./rightContainer/DeviceManager";
// import RowBtnGroup from "./rightContainer/RowBtnGroup";

export default {
  components: {
    Navbar,
    CardGroup,
    DeviceManager
  }
};
</script>
<style  scoped>
.flex_center {
  display: flex;
  justify-content: center;
}
.right_container .inside {
  width: 90%;
  max-width: 2000px;
}
.card_group {
  display: flex;
  justify-content: space-between;
}
/* @media screen and (max-width: 1600px) {
  .right_container .inside {
    width: 900px;
  }
} */
@media screen and (max-width: 1100px) {
  .right_container .inside {
    width: 95%;
  }
  .card_group {
    display: block;
    margin: 0 auto;
    padding: 30px 0 0 0;
  }
}
</style>