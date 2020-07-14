<script>
    var roomName = "{{ room_name| escapejs}}";
var selected_aerobox = "";

//var chatSocket = new WebSocket(
//    'ws://' + window.location.host +
//    '/ws/AeroboxData/' + roomName + '/');
var chatSocket = "";

fetchData = function(w_id) {
  var query = `?m=goada&w_id=${w_id}&u=1&mean=r`;
  var url_base = "/device/data/api/";
  fetch(url_base + query)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.len != 0) {
        this.pm2_5 = data[0]["pm2_5"];
        this.co2 = data[0]["co2"];
        this.rh = data[0]["rh"];
        this.temp = data[0]["temp"];
      }
    })
    .catch(function(err) {
        this.pm2_5 = null;
      this.co2 = null;
      this.rh = null;
      this.temp = null;
      console.log(err);
    });
};

function createChatSocket(w_id) {
  if (chatSocket != "") {
        chatSocket.close();
  }
  if (w_id != selected_aerobox) {
        chatSocket = new WebSocket(
            "ws://" + "testsky.atm.ncu.edu.tw:30679" + "/ws/AeroboxData/" + w_id + "/"
        );

    chatSocket.onmessage = function(e) {
      var data = JSON.parse(e.data);
      var message = data["message"];
      var message_data = JSON.parse(message);
      // document.querySelector('#chat-log').value += (message + '\n');
      document.querySelector("#pm2_5_data").textContent = message_data["pm2_5"];
      document.querySelector("#co2_data").textContent = message_data["co2"];
      document.querySelector("#rh_data").textContent = message_data["rh"];
      document.querySelector("#temp_data").textContent = message_data["temp"];
    };

    chatSocket.onclose = function(e) {
        console.error("Chat socket closed unexpectedly");
    };
  }
}

document
  .querySelector("#apply_aerobox_btn")
  .addEventListener("click", function() {
        selected_id = document.getElementById("id_select_type").value;
    fetchData(selected_id);
    createChatSocket(selected_id);
  });
</script>