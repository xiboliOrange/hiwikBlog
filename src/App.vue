<template>
  <div class="back">
    <div class="container">
      <LoginView />
    </div>
  </div>
</template>

<script>
import LoginView from './components/LoginView.vue'

export default {
  name: 'App',
  components: {
    LoginView,
  },
}
</script>

<style>
.back {
  position: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('./img/orange-pink.png');
  background-size: cover;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


</style>
