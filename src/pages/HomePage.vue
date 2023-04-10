<template>
  <div class="head">
  <div id="topFont">
  <a @click="toLogin()">登录 / 注册</a>
  </div>
  <div class="hiwik"></div>
  <div id="tip">It's HeHe and KK's Blog.</div>
  <div class="columns">
    <i class="el-icon-s-unfold" id="icon-left"></i>
    <i class="el-icon-search" id="icon-right"></i>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  
  data() {
    return {
      
    }
  },

  methods: {
    typehiwik(text, delay) {
      let characters = text.split("");
      let elem = document.querySelector(".hiwik");
      characters.forEach((char, index) => {
        setTimeout(() => {
          elem.textContent += char;
          if (char === 'H') {
            elem.style.transform = 'translateY(4px)';
          } else if(char === 'w') {
            elem.style.transform = 'translateY(-4px)';
          }else if (char === 'K') {
            elem.style.transform = 'translateY(4px)';
          } else {
            elem.style.transform = 'none';
          }
        }, delay * index);
      });
    },

    toLogin() {
      this.$router.replace("/login");
    }
  },

  mounted() {
    let elem = document.querySelector(".head");
    elem.style.height = window.innerHeight*0.4 + "px";
    this.typehiwik("HiwiK", 500);
    let tip = document.querySelector("#tip");
    tip.style.transform = "translateY(" + (-window.innerHeight*0.4*0.15 )+ "px)";
    var distance  = window.innerWidth/16;
    document.querySelector("#icon-left").style.left = distance + "px";
    document.querySelector("#icon-right").style.right = distance + "px";
    
  },
}
</script>


<style>
.head {
  background: linear-gradient(to right, rgb(255,150,61), rgb(255,204,199));
  height: 40%;
  width: 100%;
  position: absolute;
}

#topFont {
  position: relative;
  height: 30px;
  margin: 15px;
  text-align: right;
  font-size: medium;
  font-weight: lighter;
  color: white;
}

#topFont a::before {
  content: '';
  display: block;
  height: 1px;
  width: 100px;
  background-color: #fff;
  position: absolute;
  bottom: -5px; /* 控制线条位置 */
  right: -15px; /* 控制线条位置 */
}

.hiwik {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  letter-spacing: 0.4em;
  font-family: "XiMaiTi", Arial, Helvetica, sans-serif;
  transition: all 1s;
}

#tip {
  color: white;
  display: flex;
  justify-content: center;
  letter-spacing: 0.4em;
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
}

a:hover {
  cursor: pointer;
  font-weight: 800;
}

.columns {
  background: white;
  box-shadow: gray;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  font-size: 25px;
  color: #cdcdcd;
  margin-bottom: 50px;
}

#icon-left,
#icon-right {
  position: absolute;
}

</style>
