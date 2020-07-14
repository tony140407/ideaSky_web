<template>
  <div class="device_manager">
    <b-button v-b-modal.device_manager style="background-color: #007bff;">Launch demo modal</b-button>
    <b-modal id="device_manager" title="Launch demo modal">
      <div>
        <label for="id_select_type" class="col-form-label">Type:</label>
        <select name="select_type" required id="id_select_type">
          <option value selected>--------</option>
          <option v-for="(item, index) in list" :key="index">{{ item.name }}</option>
          <!-- <option class="aerobox_option" value="{{a.w_id}}">{{a.public_info__name}}</option> -->
        </select>
        <!-- <ul v-for="(item, index) in member" :key="index">
          <li>{{ item }}</li>
        </ul>-->
      </div>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="danger" @click="cancel()">Cancel</b-button>
        <b-button size="sm" variant="success" id="apply_aerobox_btn" @click="ok()">apply</b-button>
      </template>
    </b-modal>
  </div>
</template>
<style scoped>
.device_manager {
  position: fixed;
  bottom: 0px;
  right: 20px;
}
</style>
<script>
export default {
  data: function() {
    return {
      list: {
        "123456789": { name: "選項 1" },
        "234567890": { name: "選項 2" },
        "345678901": { name: "選項 3" }
      },
      member: ["Adam", "Jack", "Candy", "Louis", "Lurry"]
    };
  }
};
</script>
