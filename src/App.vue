<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {}
  },

  methods: {
  

  },

  mounted() {

  },
}
</script>

<style>
.head {
  background: linear-gradient(to right, rgb(255, 150, 61), rgb(255, 204, 199));
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
  font-family: 'XiMaiTi', Arial, Helvetica, sans-serif;
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
</style>
