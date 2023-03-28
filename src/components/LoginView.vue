<template>
  <div class="background">
    <img src="../img/HiwiK.png" />
    <el-form
      :model="loginForm"
      status-icon
      :rules="loginRules"
      ref="loginForm"
      class="login-form"
      label-position="center"
      @submit.native.prevent
    >
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user"
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入您的用户名"
          name="username"
          type="text"
          auto-complete="off"
          style="margin-bottom: 15px; width: 78%"
          clearable
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-lock"
          ref="password"
          v-model="loginForm.password"
          placeholder="请输入您的密码"
          name="password"
          type="password"
          auto-complete="off"
          style="margin-bottom: 30px; width: 78%"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button
          id="loginButton"
          type="primary"
          @click="submitForm('loginForm')"
          style="width: 56%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
      "
    >
      <div style="width: 40px" />
      <div
        style="width: 340px; height: 40px; margin-top: 10px; text-align: center"
      >
        <span style="font-size: 14px; color: orange">没有账号？</span>
        <a style="font-size: 14px; color: gray">请点击此处注册</a>
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

  data() {
    return {
      loginForm: {
        username: '',
      },
      loginRules: {
        username: [
          {
            required: true,
            message: 'Please input your username',
            trigger: 'blur',
          },
        ],
      },
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        document.getElementById('loginButton').style.backgroundColor =
          '#FF963D;'
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },

  mounted() {
    // 在组件挂载时，使用 setTimeout 来添加 show 类，从而显示登录框
    setTimeout(() => {
      document.querySelector('.background').classList.add('show')
    }, 500)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.background {
  display: grid;
  place-items: center;
  height: 400px;
  width: 500px;
  background-color: white;
  border-radius: 3%;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.3);
  opacity: 0; /* 初始透明度为 00 */
  transition: opacity 1s ease-in-out; /* 设置过渡效果 */
  text-align: center;
}
.background.show {
  opacity: 1; /* 通过添加 show 类来显示登录框 */
}
img {
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 40%;
  height: auto;
}

.el-button--primary {
  background-color: #ff963d;
  border-color: #ff963d;
}
.el-button--primary:hover {
  background-color: orange;
  border-color: orange;
  color: white;
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
  background-image: url('../img/svg/QQ-circle-before.svg');
  background-size: contain;
  transform: translateX(22px);
  cursor: pointer;
}

.QQ-login-btn:hover {
  background-image: url('../img/svg/QQ-circle-fill.svg');
}
</style>
