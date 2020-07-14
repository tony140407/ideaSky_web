<template>
  <div class="monitor_card">
    <div class="monitor_header" v-html="title"></div>
    <div class="monitor_body">
      <i class="far fa-8x" :class="fa_icon" :style="{ color: fa_color}"></i>
      <div>{{data_now}}</div>
    </div>
    <div class="monitor_footer">
      <div>
        <b-button class="chart_line_btn" id="show-btn" @click="showChart()">
          <i class="fas fa-chart-line fa-2x"></i>
        </b-button>

        <b-modal :id="this.id" :ref="this.id">
          <template v-slot:modal-title>
            <div class="chart_header" v-html="chart_title"></div>
          </template>

          <p class="my-4"></p>
        </b-modal>
      </div>
      <div class="unit" v-html="unit"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    props_title: String,
    data_now: Number
  },
  data: function() {
    return {
      title: null,
      id: null,
      unit: null,
      fa_icon: null,
      fa_color: null,
      chart_title: null
    };
  },
  methods: {
    showChart: function() {
      this.$refs[this.id].show();
    }
  },
  created: function() {
    switch (this.props_title) {
      case "pm2_5":
        this.title = "細懸浮微粒(PM<sub>2.5</sub>)";
        this.unit = "μg/m<sup>3</sup>";
        this.fa_icon = "fa-smile";
        this.fa_color = "#0DBC79";
        this.chart_title = "PM<sub>2.5</sub> 時序圖";
        break;
      case "co2":
        this.title = "二氧化碳(CO<sub>2</sub>)";
        this.unit = "ppm";
        this.fa_icon = "fa-smile";
        this.fa_color = "#0DBC79";
        this.chart_title = `CO<sub>2</sub> 時序圖`;
        break;
      case "temp":
        this.title = "溫度(Temperature)";
        this.unit = "<sup>o</sup>C";
        this.fa_icon = "fa-smile";
        this.fa_color = "rgb(30,154,255)";
        this.chart_title = `Temperature 時序圖`;
        break;
      case "rh":
        this.title = "相對溼度(RH)";
        this.unit = "%";
        this.fa_icon = "fa-smile";
        this.fa_color = "rgb(30,154,255)";
        this.chart_title = `RH 時序圖`;
        break;
    }
    this.id = `${this.props_title}ChartModal`;
  }
};
</script>


<style scoped>
.monitor_card {
  width: 45%;
  margin: 0px 20px 20px 0;
}
.monitor_header {
  width: 100%;
  height: 76px;
  padding: 0 20px;
  background-color: #59b2c9;
  font-size: 2rem;
  line-height: 76px;
  font-weight: 900;
}
.monitor_body {
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 30px 40px;
  border: 2px solid #59b2c9;
}
.monitor_body div {
  font-size: 4rem;
  font-weight: 700;
  margin: auto 0;
}
.monitor_body i {
  margin: auto 0;
}
.monitor_footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: #59b2c9;
  padding: 10px 20px;
}
.chart_line_btn {
  background-color: #59b2c9;
  color: #333;
  border: none;
}
.chart_line_btn:hover {
  background-color: #fff;
  color: #333;
}
.unit {
  margin: auto 0;
  font-size: 2rem;
  font-weight: 700;
}
.chart_header {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
}

@media screen and (max-width: 930px) {
  .monitor_card {
    width: 90%;
  }
}
@media screen and (max-width: 460px) {
  .monitor_card {
    width: 100%;
    font-size: 6px;
    margin: 0 0 15px 0;
  }
  .monitor_header {
    font-size: 1.5rem;
    padding: 0 10px;
  }
  .monitor_body {
    padding: 20px 20px;
  }
  .monitor_body div {
    font-size: 3rem;
  }
  .unit {
    font-size: 1.5rem;
  }
}
</style>