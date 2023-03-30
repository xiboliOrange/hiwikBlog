<template>
  <div class="signup">
    <img src="../img/signup.png" />
    <el-form
      :model="signUpForm"
      status-icon
      :rules="signUpRules"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input
          v-model="signUpForm.username"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          type="text"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="signUpForm.password"
          placeholder="请设置密码（必须包含字母、数字）"
          prefix-icon="el-icon-lock"
          showPassword
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="signUpForm.comfirmPass"
          placeholder="请确认密码"
          prefix-icon="el-icon-key"
          showPassword
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="signUpForm.email" placeholder="请输入邮箱" prefix-icon ="el-icon-message" type="text"></el-input>
      </el-form-item>
      <el-button
        class="primaryBtn"
        icon="el-icon-d-arrow-right"
        style="margin-top: 20px; width: 100px "
        round
      ></el-button>
    </el-form>
    <div style="display: flex; align-items: center;justify-content: center; height: 50px;">
      <div style="width: 40px" />
      <div style="width: 340px; height: 40px;  text-align: center">
        <button style="background-color: white; border: 0; cursor: pointer;" @click="$emit('hideSignUp', true)">
          <span style="font-size: 14px; color: orange">已拥有账号？</span>
          <span style="font-size: 14px; color: gray">请点击此处登录</span>
        </button>
      </div>
      <el-button icon="el-icon-s-check"  circle></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUpView',

  data() {
    var validateUsername = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
      callback()
    }
    return {
      signUpForm: {
        username: '',
        password: '',
        comfirmPass: '',
        email: '',
      },

      signUpRules: {
        username: { validator: validateUsername, trigger: 'blur' },
      },
    }
  },
  methods: {
    showView(val) {
      if (val === true) {
        let elem = document.querySelector('.signup')
        elem.style.transform = 'rotateY(0deg)'
        setTimeout(() => {
          elem.style.opacity = 1;
          elem.style.height = '520px';
        }, 300)
      }
    },
    hideView(val) {
      if(val === true) {
        let elem = document.querySelector('.signup');
        elem.style.transform = 'rotateY(180deg)';
        elem.style.opacity = 0;
        elem.style.height = '450px';
      }
    }
  },
}
</script>

<style scoped>
.signup {
  position: absolute;
  display: grid;
  place-items: center;
  background-color: white;
  width: 480px;
  height: 450px;
  border-radius: 3%;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.3);
  text-align: center;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: all 1.5s ease-in-out;
}

.signup.hide {
  transform: rotateY(180deg);
  opacity: .5;
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
</style>
