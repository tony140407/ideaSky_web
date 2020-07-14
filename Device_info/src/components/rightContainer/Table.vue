<template>
  <div>
    <b-table striped hover :items="items">
      <template v-slot:cell(Device)="data">
        <span v-html="data.value"></span>
      </template>
      <template v-slot:cell(API)="data">
        <span v-html="data.value"></span>
      </template>
      <template v-slot:cell(Activity)="data">
        <span v-html="data.value"></span>
      </template>
      <template v-slot:cell(Last Seen)="data">
        <span class="hide" v-html="data.value"></span>
      </template>
    </b-table>
    <!-- <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>-->
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  props: {
    props_data: JSON
  },
  data() {
    return {
      items: [
        {
          Device: `<button id="" style="color:#fff;background-color: #17A2B8;">171_19_5_12(二樓室外機)</button>`,
          Gateway: "default_name",
          Status: "Offline",
          "PM2.5": "13",
          CO2: "600",
          Temp: "30.28	",
          RH: "68.92",
          Pressure: "1004.5",
          Activity:
            '<td> <div class="progress"> <div id="p0" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">0</a> </div> <div id="p1" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">1</a> </div> <div id="p2" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">2</a> </div> <div id="p3" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">3</a> </div> <div id="p4" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">4</a> </div> <div id="p5" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">5</a> </div> <div id="p6" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">6</a> </div> <div id="p7" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">7</a> </div> <div id="p8" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">8</a> </div> <div id="p9" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">9</a> </div> <div id="p10" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">10</a> </div> <div id="p11" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">11</a> </div> </div> <div class="progress" style="margin-top:4px;"> <div id="p12" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">12</a> </div> <div id="p13" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">13</a> </div> <div id="p14" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">14</a> </div> <div id="p15" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">15</a> </div> <div id="p16" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">16</a> </div> <div id="p17" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">17</a> </div> <div id="p18" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">18</a> </div> <div id="p19" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">19</a> </div> <div id="p20" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">20</a> </div> <div id="p21" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">21</a> </div> <div id="p22" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">22</a> </div> <div id="p23" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">23</a> </div> </div> </td> ',
          "Last Seen": "May 4, 2020, 9:04 p.m.",
          API:
            '<button style="color:#fff;background-color: #17A2B8;">Link</button>'
        },
        {
          Device: `<button id="" style="color:#fff;background-color: #17A2B8;">171_19_5_12(二樓室外機)</button>`,
          Gateway: "default_name",
          Status: "Offline",
          "PM2.5": "13",
          CO2: "600",
          Temp: "30.28	",
          RH: "68.92",
          Pressure: "1004.5",
          Activity:
            '<td> <div class="progress"> <div id="p0" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">0</a> </div> <div id="p1" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">1</a> </div> <div id="p2" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">2</a> </div> <div id="p3" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">3</a> </div> <div id="p4" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">4</a> </div> <div id="p5" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">5</a> </div> <div id="p6" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">6</a> </div> <div id="p7" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">7</a> </div> <div id="p8" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">8</a> </div> <div id="p9" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">9</a> </div> <div id="p10" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">10</a> </div> <div id="p11" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">11</a> </div> </div> <div class="progress" style="margin-top:4px;"> <div id="p12" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">12</a> </div> <div id="p13" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">13</a> </div> <div id="p14" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">14</a> </div> <div id="p15" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">15</a> </div> <div id="p16" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">16</a> </div> <div id="p17" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">17</a> </div> <div id="p18" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">18</a> </div> <div id="p19" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">19</a> </div> <div id="p20" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">20</a> </div> <div id="p21" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">21</a> </div> <div id="p22" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">22</a> </div> <div id="p23" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">23</a> </div> </div> </td> ',
          "Last Seen": "May 4, 2020, 9:04 p.m.",
          API:
            '<button style="color:#fff;background-color: #17A2B8;">Link</button>'
        },
        {
          Device: `<button id="" style="color:#fff;background-color: #17A2B8;">171_19_5_12(二樓室外機)</button>`,
          Gateway: "default_name",
          Status: "Offline",
          "PM2.5": "13",
          CO2: "600",
          Temp: "30.28	",
          RH: "68.92",
          Pressure: "1004.5",
          Activity:
            '<td> <div class="progress"> <div id="p0" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">0</a> </div> <div id="p1" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">1</a> </div> <div id="p2" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">2</a> </div> <div id="p3" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">3</a> </div> <div id="p4" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">4</a> </div> <div id="p5" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">5</a> </div> <div id="p6" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">6</a> </div> <div id="p7" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">7</a> </div> <div id="p8" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">8</a> </div> <div id="p9" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">9</a> </div> <div id="p10" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">10</a> </div> <div id="p11" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">11</a> </div> </div> <div class="progress" style="margin-top:4px;"> <div id="p12" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">12</a> </div> <div id="p13" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">13</a> </div> <div id="p14" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">14</a> </div> <div id="p15" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">15</a> </div> <div id="p16" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">16</a> </div> <div id="p17" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">17</a> </div> <div id="p18" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">18</a> </div> <div id="p19" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">19</a> </div> <div id="p20" class="progress-bar bg-progress-bar" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">20</a> </div> <div id="p21" class="progress-bar bg-success" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">21</a> </div> <div id="p22" class="progress-bar bg-warning" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">22</a> </div> <div id="p23" class="progress-bar bg-danger" role="progressbar" style="width: 8.33%" aria-valuenow="8.33" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="0"> <a href="">23</a> </div> </div> </td> ',
          "Last Seen": "May 4, 2020, 9:04 p.m.",
          API:
            '<button style="color:#fff;background-color: #17A2B8;">Link</button>'
        }
      ]
    };
  },
  methods: {}
  // mounted() {
  //   this.$refs["171_19_5_12(二樓室外機)"].addEventListener("click", function(
  //     event
  //   ) {
  //     document.querySelector("#171_19_5_12(二樓室外機)_modal").show();
  //   });
  // },

  // 失敗
  // created: function() {
  //   this.items = this.props_data;
  //   for (var i = 0; i < this.props_data.length; i++) {
  //     this.items[
  //       i
  //     ].Device = `<button id="" style="color:#fff;background-color: #17A2B8;">${this.props_data[i].Device}</button>`;
  //   }
  // }
};
</script>