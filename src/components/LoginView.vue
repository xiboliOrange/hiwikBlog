<template>
  <div class="login">
    <img src="../img/HiwiK.png" />
    <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" class="login-form" label-position="center"
      @submit.native.prevent>
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user" ref="username" v-model="loginForm.username" placeholder="请输入您的用户名"
          name="username" type="text" auto-complete="off" clearable />
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" ref="password" v-model="loginForm.password" placeholder="请输入您的密码"
          name="password" auto-complete="off"  show-password />
      </el-form-item>
      <el-form-item>
        <el-button class="primaryBtn" @click="submitForm('loginForm')" style="width: 56%" round>登录</el-button>
      </el-form-item>
    </el-form>
    <div style="display: flex; align-items: center;justify-content: center; height: 50px;">
      <div style="width: 40px" />
      <div style="width: 340px; height: 40px; margin-top: 10px; text-align: center">
        <button style="background-color: white; border: 0; cursor: pointer;" @click="$emit('hideLogin', true)">
          <span style="font-size: 14px; color: orange">没有账号？</span>
          <span style="font-size: 14px; color: gray">请点击此处注册</span>
        </button>
      </div>
      <div class="QQ-login">
        <div class="QQ-login-btn" title="使用QQ登录"></div>
      </div>
    </div>
  </div>
</template>

<script>




export default {
  name: 'LoginView',
  props: {
    msg: String,

  },

  data () {
    var validateUsername = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      }
      callback();
    }

    var validatePassword = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      callback();
    }
    return {

      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]

      },
    }
  },

  methods: {
    submitForm (loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          alert("成功");
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    hideView(val) {
      if(val === true){
        let elem = document.querySelector('.login');
        elem.style.transform = 'rotateY(180deg)';
        elem.style.opacity = 0;
        elem.style.height = '470px';
      }
    },

    showView(val) {
      if(val === true){
        let elem = document.querySelector('.login');
        elem.style.transform = 'rotateY(0deg)'
        elem.style.opacity = 1;
        setTimeout(() => {
          elem.style.height = '400px';
        }, 300);
      }
    }
  },

  mounted () {
    // 在组件挂载时，使用 setTimeout 来添加 show 类，从而显示登录框
    setTimeout(() => {
      document.querySelector('.login').style.opacity = 1;
    }, 500)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: absolute;
  display: grid;
  place-items: center;
  height: 400px;
  width: 480px;
  background-color: white;
  border-radius: 3%;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.3);
  opacity: 0;
  /* 初始透明度为 00 */
  transition: opacity 1s ease-in-out;
  /* 设置过渡效果 */
  text-align: center;
  transition: all 1.5s ease-in-out;
  backface-visibility: hidden;
}


img {
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 40%;
  height: auto;
}

.el-input {
  width: 380px;
}

.grid-content {
  min-height: 20px;
}

.QQ-login {
  position: relative;
  width: 50px;
  height: 50px;
}

.QQ-login-btn {
  width: 100%;
  height: 100%;
  background-image: url("../img/svg/QQ-circle-before.svg");
  background-size: contain;
  transform: translateX(22px);
  transform: translateY(-10px);
  cursor: pointer;
}

.QQ-login-btn:hover {
  background-image: url("../img/svg/QQ-circle-fill.svg");
}
</style>
