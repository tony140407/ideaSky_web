<template>
  <div class="register">
    <div class="scene scene--card">
      <div class="card" @click="flip_card('card')">
        <div class="card__face card__face--front"></div>
        <div class="card__face card__face--back">
          <div class="personal_photo">
            <p>{{full_name}}</p>
            <img src="../assets/photo.svg" alt />
          </div>
          <div class="personal_information">
            <h2>{{user_id}}</h2>
            <div class="detail">
              <img src="../assets/mail.svg" alt />
              <p>{{user_email}}</p>
            </div>

            <div class="detail">
              <img src="../assets/phone.svg" alt />
              <p>{{user_cellphone}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form class="form" @click="flip_card('form')">
      <h2>會員註冊</h2>
      <div class="group">
        <label for="user_id">帳號</label>
        <input type="text" name id="user_id" v-model="user_id" value="user_id" />
      </div>
      <div class="group">
        <label for="user_password">密碼</label>
        <input type="password" name id="user_password" />
      </div>
      <div class="group">
        <label for="user_re_password">再次確認密碼</label>
        <input type="password" name id="user_re_password" />
      </div>
      <div class="group name">
        <div class="full_name">
          <label for="user_first_name">first_name</label>
          <input
            type="text"
            name
            id="user_first_name"
            v-model="user_first_name"
            value="user_first_name"
          />
        </div>
        <div class="full_name">
          <label for="user_last_name">last name</label>
          <input
            type="text"
            name
            id="user_last_name"
            v-model="user_last_name"
            value="user_last_name"
          />
        </div>
      </div>
      <div class="group">
        <label for="user_email">e-mail</label>
        <div class="email">
          <input type="text" name id="user_email" v-model="user_email" value="user_email" />
          <button>e-mail 驗證</button>
        </div>
      </div>
      <div class="group">
        <label for="user_cellphone">cell phone</label>
        <input type="text" name id="user_cellphone" v-model="user_cellphone" value="user_cellphone" />
      </div>
      <button class="btn_google">
        <img src="../assets/google.svg" style="width:30px" /> google註冊
      </button>
      <div class="btn-group">
        <button class="btn">取消</button>
        <button class="btn">註冊</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      user_id: "",
      user_first_name: "",
      user_last_name: "",
      full_name: "",
      user_email: "",
      user_cellphone: "",
      flip: "front"
    };
  },
  watch: {
    user_first_name: function(val) {
      this.full_name = this.user_first_name + " " + this.user_last_name;
    },
    user_last_name: function(val) {
      this.full_name = this.user_first_name + " " + this.user_last_name;
    }
  },
  methods: {
    flip_card(position) {
      if (position == "form" && this.flip == "front") {
        document.querySelector(".card").classList.toggle("is-flipped");
        this.flip = "back";
      } else if (position == "card") {
        document.querySelector(".card").classList.toggle("is-flipped");
        if (this.flip == "back") {
          this.flip = "front";
        } else {
          this.flip = "back";
        }
      }
    }
  }
};
</script>
<style>
.register {
  height: 1050px;
  width: 800px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 10px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 30px #000;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  position: relative;
  top: 80px;
}

.form {
  width: 600px;
  color: #fff;
  position: relative;
  top: -120px;
  z-index: 1;
}

.form h2 {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
  font-family: "Helvetica", "Arial", "微軟正黑體", sans-serif;
  font-size: 25px;
  font-weight: 900;
}

.form .group {
  margin-bottom: 20px;
}

.form label {
  line-height: 2;
  font-family: "Helvetica", "Arial", "微軟正黑體", sans-serif;
}

.form input {
  width: 100%;
  border: 1px solid #aaa;
  line-height: 3;
  border-radius: 5px;
}

.name {
  display: flex;
  justify-content: space-between;
}

.full_name {
  box-sizing: border-box;
  width: 48%;
}

.full_name label {
  line-height: 2;
  font-family: "Helvetica", "Arial", "微軟正黑體", sans-serif;
}

.full_name input {
  width: 100%;
  border: 1px solid #aaa;
  line-height: 3;
  border-radius: 5px;
}

.form .btn-group {
  font-size: 0;
  display: flex;
  justify-content: center;
}

.form .btn {
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background-color: #6ab4fe;
  width: 190px;
  padding: 10px 0;
  color: #fff;
  font-family: "Helvetica", "Arial", "微軟正黑體", sans-serif;
  box-sizing: border-box;
}
.form .btn:hover {
  background-color: #fff;
  border: 2px solid #6ab4fe;
  color: #000;
}
.btn_google {
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background-color: #6ab4fe;
  margin-bottom: 20px;
  padding: 10px 0;
  color: #fff;
  font-family: "Helvetica", "Arial", "微軟正黑體", sans-serif;
  box-sizing: border-box;
}
.btn_google:hover {
  background-color: #fff;
  border: 2px solid #6ab4fe;
  color: #000;
}

.form .btn + .btn {
  margin-left: 20px;
}
.btn-group :nth-of-type(even) {
  width: 380px;
}
.information_card {
  background: url("https://picsum.photos/1200/1000?random=10") no-repeat center
    center / cover;
  width: 600px;
  height: 300px;
  position: relative;
  top: -150px;
}

.scene {
  width: 600px;
  height: 250px;
  position: relative;
  top: -150px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background-image: url("../assets/cloud3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #555;
  border: rgb(255, 255, 255) solid 10px;
  border-radius: 20px;
  box-sizing: border-box;
}

.card__face--back {
  transform: rotateY(180deg);
  background-color: #fff;
  border: rgba(0, 0, 0, 0.5) solid 10px;
  color: #666;
  box-sizing: border-box;
  /* border-radius: 20px; */
  display: flex;
  justify-content: space-between;
}
.personal_photo {
  width: 30%;
  height: 100%;
  /* margin: 0; */
  position: relative;
  border-right: 2px solid #aaa;
  background-size: cover;

  display: flex;
  justify-content: center;
}
.personal_photo p {
  position: absolute;
  top: -100px;
  font-size: 16px;
}
.personal_photo img {
  padding: 40% 0 0 0%;
  width: 90%;
}
.personal_information {
  width: 70%;
  height: 100%;
  padding: 0px 50px;
  box-sizing: border-box;
  /* display: flex; */
}
.personal_information h2 {
  line-height: 1.5;
  height: 45px;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 2px solid #aaa;
}
.personal_information p {
  line-height: 1;
  font-size: 12px;
  margin-top: 30px;
}
.personal_information .detail {
  margin-top: 10px;
  display: flex;
}
.personal_information .detail img {
  width: 50px;
}
.personal_information .detail p {
  line-height: 1.5;
  height: 45px;
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
}
.email {
  display: flex;
}
.email button,
.email input {
  border: none;
  background-color: #fff;
  padding: 5px 10px;
}
.email button {
  width: 150px;
  border-radius: 0 5px 5px 0;
  /* border-left: 2px solid #aaa; */
  background-color: rgb(165, 222, 228);
}
.email button:hover {
  background-color: rgb(185, 242, 248);
}
.email input {
  border-radius: 5px 0 0 5px;
}
</style>





