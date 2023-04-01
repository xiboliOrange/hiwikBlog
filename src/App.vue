<template>
  <div class="head">
  <div id="topFont">
  <a>登录</a>
  <a style="margin-left: 20px;">注册</a>
  </div>
  
  </div>
</template>

<script>
export default {

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
</style>
