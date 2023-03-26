<template>
  <div class="background">
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  props: {
    msg: String
  },
  mounted() {
    // 在组件挂载时，使用 setTimeout 来添加 show 类，从而显示登录框
    setTimeout(() => {
      document.querySelector('.background').classList.add('show');
    }, 500);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  height: 50%;
  width: 35%;
  background-color: white;
  border-radius: 3%;
  opacity: 0; /* 初始透明度为 00 */
  transition: opacity 1s ease-in-out; /* 设置过渡效果 */
}
.background.show {
  opacity: 1; /* 通过添加 show 类来显示登录框 */
}
</style>
