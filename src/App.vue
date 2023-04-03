<template>
  <div class="head">
  <div id="topFont">
  <a>登录</a>
  <a style="margin-left: 20px;">注册</a>
  </div>
  <div class="hiwik"></div>
  <div class="tip">It's HeHe and KK's Blog.</div>
  </div>
</template>

<script>
export default {
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
    }
  },

  mounted() {
    let elem = document.querySelector(".head");
    elem.style.height = window.innerHeight*0.4 + "px";
    this.typehiwik("HiwiK", 500);
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
  font-weight: 800;
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


</style>
