
<template>
  <div class="right_container">
    <Navbar props_user="14531" />
    <div class="flex_center">
      <div class="inside">
        <div class="card_group">
          <Card title="Aerobox" onlineTotal="5/22" txt="Online/Total" />
          <Card title="Gateway" onlineTotal="0/0" txt="Online/Total" />
          <Card title="Data" onlineTotal="500" txt="Today" />
          <Card title="Event" onlineTotal="0" txt="Today" />
        </div>

        <RowBtnGroup />
        <Chart />
      </div>
    </div>
    <DeviceManager />
  </div>
</template>

<script>
import Navbar from "./rightContainer/Navbar";
import Card from "./rightContainer/Card";
import RowBtnGroup from "./rightContainer/RowBtnGroup";
import Chart from "./rightContainer/Chart";
import DeviceManager from "./rightContainer/DeviceManager";

export default {
  components: {
    Navbar,
    Card,
    RowBtnGroup,
    Chart,
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
  width: 1600px;
}
.card_group {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #6c757d;
  padding: 30px 0;
  margin: 0 0px;
}
@media screen and (max-width: 1600px) {
  .right_container .inside {
    width: 900px;
  }
}
@media screen and (max-width: 1000px) {
  .right_container .inside {
    width: 90%;
  }
  .card_group {
    display: block;
    margin: 0;
    padding: 30px 0 0 0;
  }
}
</style>