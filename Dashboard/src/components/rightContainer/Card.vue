<template>
  <div class="card">
    <b-card class="text-center">
      <h2>{{title}}</h2>
      <p>{{onlineTotal}}</p>
      <div class="buttom_icon">
        <ButtomIcon />
        <div class="txt">{{txt}}</div>
      </div>
    </b-card>
  </div>
</template>
<script>
import ButtomIcon from "./ButtomIcon";
export default {
  components: {
    ButtomIcon
  },
  props: {
    title: String,
    onlineTotal: String,
    txt: String,
    color: String
  }
};
</script>

<style scoped>
.card {
  width: 300px;
  border: none;
  color: #6c757d !important;
}
.card h2 {
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
  font-size: 2rem;
}
.card p {
  text-align: center;
  margin: 10px 0;
  font-size: 2rem;
}
.buttom_icon {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 1600px) {
  .card {
    width: 180px;
  }
}
@media screen and (max-width: 1000px) {
  .card {
    width: 100%;
    margin-bottom: 10px;
  }
  .card h2 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
  }
  .card p {
    margin: 0;
    font-size: 1rem;
  }
  .card-body {
    padding: 5px;
  }
}
</style>