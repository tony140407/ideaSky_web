
<template>
  <div class="right_container">
    <Navbar props_user="123146" />
    <div class="flex_center">
      <div class="inside">
        <RowBtnGroup />
        <Table />
      </div>
    </div>
    <DeviceManager />
  </div>
</template>

<script>
import Navbar from "./rightContainer/Navbar";
// import Card from "./Card";
import RowBtnGroup from "./rightContainer/RowBtnGroup";
import Table from "./rightContainer/Table";
import DeviceManager from "./rightContainer/DeviceManager";

export default {
  components: {
    Navbar,
    RowBtnGroup,
    Table,
    DeviceManager
  },
  data: function() {
    return {
      // fake_data: [
      //   {
      //     Device: "171_19_5_12(二樓室外機)",
      //     Gateway: "default_name",
      //     Status: "Offline",
      //     "PM2.5": "13",
      //     CO2: "600",
      //     Temp: "30.28	",
      //     RH: "68.92",
      //     Pressure: "1004.5",
      //     Activity:
      //       '<td> <div class="progress"> <div id="p0" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">0</a> </div> <div id="p1" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">1</a> </div> <div id="p2" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">2</a> </div> <div id="p3" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">3</a> </div> <div id="p4" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">4</a> </div> <div id="p5" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">5</a> </div> <div id="p6" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">6</a> </div> <div id="p7" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">7</a> </div> <div id="p8" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">8</a> </div> <div id="p9" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">9</a> </div> <div id="p10" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">10</a> </div> <div id="p11" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">11</a> </div> </div> <div class="progress" style="margin-top:4px;"> <div id="p12" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">12</a> </div> <div id="p13" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">13</a> </div> <div id="p14" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">14</a> </div> <div id="p15" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">15</a> </div> <div id="p16" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">16</a> </div> <div id="p17" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">17</a> </div> <div id="p18" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">18</a> </div> <div id="p19" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">19</a> </div> <div id="p20" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">20</a> </div> <div id="p21" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">21</a> </div> <div id="p22" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">22</a> </div> <div id="p23" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">23</a> </div> </div> </td> ',
      //     "Last Seen": "May 4, 2020, 9:04 p.m.",
      //     API:
      //       '<button style="color:#fff;background-color: #17A2B8;">Link</button>'
      //   },
      //   {
      //     Device: "171_19_5_12(二樓室外機)",
      //     Gateway: "default_name",
      //     Status: "Offline",
      //     "PM2.5": "13",
      //     CO2: "600",
      //     Temp: "30.28	",
      //     RH: "68.92",
      //     Pressure: "1004.5",
      //     Activity:
      //       '<td> <div class="progress"> <div id="p0" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">0</a> </div> <div id="p1" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">1</a> </div> <div id="p2" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">2</a> </div> <div id="p3" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">3</a> </div> <div id="p4" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">4</a> </div> <div id="p5" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">5</a> </div> <div id="p6" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">6</a> </div> <div id="p7" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">7</a> </div> <div id="p8" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">8</a> </div> <div id="p9" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">9</a> </div> <div id="p10" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">10</a> </div> <div id="p11" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">11</a> </div> </div> <div class="progress" style="margin-top:4px;"> <div id="p12" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">12</a> </div> <div id="p13" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">13</a> </div> <div id="p14" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">14</a> </div> <div id="p15" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">15</a> </div> <div id="p16" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">16</a> </div> <div id="p17" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">17</a> </div> <div id="p18" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">18</a> </div> <div id="p19" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">19</a> </div> <div id="p20" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">20</a> </div> <div id="p21" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">21</a> </div> <div id="p22" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">22</a> </div> <div id="p23" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">23</a> </div> </div> </td> ',
      //     "Last Seen": "May 4, 2020, 9:04 p.m.",
      //     API:
      //       '<button style="color:#fff;background-color: #17A2B8;">Link</button>'
      //   }
      // ]
    };
  }
};
</script>
<style  scoped>
.flex_center {
  display: flex;
  justify-content: center;
}
.right_container .inside {
  width: 95%;
  max-width: 2000px;
}

@media screen and (max-width: 1000px) {
  .right_container .inside {
    min-width: 1210px;
  }
}
</style>