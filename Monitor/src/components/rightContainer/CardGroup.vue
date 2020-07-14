<template>
  <div class="card_group">
    <CardVB props_title="pm2_5" :data_now="this.pm2_5" />
    <CardVB props_title="co2" :data_now="this.co2" />
    <CardVB props_title="temp" :data_now="this.temp" />
    <CardVB props_title="rh" :data_now="this.rh" />
  </div>
</template>
<script>
import CardVB from "./CardVB";
export default {
  components: {
    CardVB
  },
  data: function() {
    return {
      pm2_5: 10,
      co2: 1004,
      temp: 23.5,
      rh: 85
    };
  }
};
</script>


<style scoped>
.card_group {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media screen and (max-width: 460px) {
  .card_group {
    margin-top: 10px;
  }
}
</style>