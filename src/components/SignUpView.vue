<template>
  <div class="signup">
    <img src="../img/signup.png" />
    <el-form
      :model="signUpForm"
      status-icon
      :rules="signUpRules"
      ref="signUpForm"
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
      <el-form-item prop="confirm">
        <el-input
          v-model="signUpForm.confirm"
          placeholder="请确认密码"
          prefix-icon="el-icon-key"
          showPassword
        ></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          v-model="signUpForm.email"
          placeholder="请输入邮箱"
          prefix-icon="el-icon-message"
          type="text"
        ></el-input>
      </el-form-item>
      <el-button
        class="primaryBtn"
        icon="el-icon-d-arrow-right"
        style="margin-top: 20px; width: 100px"
        round
      ></el-button>
    </el-form>
    <div
      style="
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        "
    >
      <div style="width: 40px" />
      <div style="width: 340px; height: 40px; text-align: center">
        <button
          style="background-color: white; border: 0; cursor: pointer"
          @click="$emit('hideSignUp', true)"
        >
          <span style="font-size: 14px; color: orange">已拥有账号？</span>
          <span style="font-size: 14px; color: gray">请点击此处登录</span>
        </button>
      </div>
      <el-button icon="el-icon-s-check" circle></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUpView',

  data() {
    var validateUsername = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      }
      callback();
    }

    var validatePassword = (rules, value, callback) => {
      let regex = new RegExp(
        '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-z0-9]){8,16}'
      ); //必须包含大小写字母、数字、特殊字符，且长度在9-16位之间
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 8 || value.length > 16) {
        callback(new Error('请输入8-16位密码'));
      } else if (!regex.test(value)) {
        callback(new Error('密码至少位8位，且同时包含字母、数字、特殊字符'));
      } else {
        callback();
      }
    }

    var validateConfirm = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'));
      } else if (value != this.signUpForm.password) {
        console.log(value);
        callback(new Error('确认密码与密码不一致！'))
      } else {  
        callback();
      }
    }

    var validateEmail = (rules, value, callback) => {
      let regex = new RegExp('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\\.([a-zA-Z])+')
      console.log(value);
      if (value === '') {
        callback(new Error('输入邮箱不能为空'));
      } else if (!regex.test(value)) {
        callback(new Error('请检查您的邮箱格式是否输入正确'));
      } else {
        
        callback();
      }
    }

    return {
      signUpForm: {
        username: '',
        password: '',
        confirm: '',
        email: '',
      },

      signUpRules: {
        username: {
          validator: validateUsername,
          trigger: 'blur',
          required: true,
        },
        password: {
          validator: validatePassword,
          trigger: 'blur',
          required: true,
        },
        confirm: {
          validator: validateConfirm,
          trigger: 'blur',
          required: true,
        },
        email: {
          validator: validateEmail,
          trigger: 'blur',
          required: true,
        },
      },
    }
  },
  methods: {
    showView(val) {
      if (val === true) {
        let elem = document.querySelector('.signup')
        elem.style.transform = 'rotateY(0deg)'
        setTimeout(() => {
          elem.style.opacity = 1
          elem.style.height = '520px'
        }, 300)
      }
    },
    hideView(val) {
      if (val === true) {
        let elem = document.querySelector('.signup')
        elem.style.transform = 'rotateY(180deg)'
        elem.style.opacity = 0
        elem.style.height = '450px'
      }
    },
    //验证用户名是否存在
    checkUserExist() {},
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
  opacity: 0.5;
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
