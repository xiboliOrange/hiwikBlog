<template>
  <div class="back">
    <div class="container">
      <LoginView ref="child1" v-on:hideLogin="hideLogin" />
      <SignUpView ref="child2" v-on:hideSignUp="hideSignUp"></SignUpView>
    </div>
  </div>
</template>

<script>
import LoginView from './components/LoginView.vue'
import SignUpView from './components/SignUpView.vue';

export default {
  name: 'App',
  components: {
    LoginView,
    SignUpView,
  },

  methods: {
    hideLogin (val) {
      this.$refs.child1.hideView(val);
      this.$refs.child2.showView(val);
    },

    hideSignUp (val) {
      this.$refs.child2.hideView(val);
      this.$refs.child1.showView(val);
    }
  }
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