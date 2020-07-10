<template>
  <div class="register">
    <div class="scene scene--card">
      <div class="card" @click="flip_card('card')">
        <div class="card__face card__face--front"></div>
      </div>
    </div>
    <form class="form" action="https://ideasky.atm.ncu.edu.tw/jwt/user/login/" method="post" @click="flip_card('form')">
      <h2>會員登入</h2>
      <div class="group">
        <label for="user_id">帳號</label>
        <input type="text" name="username" id="user_id" />
      </div>
      <div class="group">
        <label for="user_password">密碼</label>
        <input type="password" name="password" id="user_password" />
      </div>

      <button class="btn_google">
        <img src="../assets/google.svg" style="width:30px" /> google登入
      </button>
      <div class="btn-group">
        <button class="btn">註冊</button>
        <button class="btn" type="submit">登入</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style>
.register {
  height: 600px;
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
@media screen and (max-width: 900px) {
  .register {
    width: 400px;
  }
  .form {
    width: 200px;
    box-sizing: border-box;
  }
  .scene {
    width: 200px;
  }
  .information_card {
    width: 200px;
  }
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
  width: 20%;
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
  width: 40%;
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





