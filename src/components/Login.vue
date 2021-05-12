<template>
  <div class="login_container">
    <!--    logo-->
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!--      登录框-->
      <el-form ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user"
                    v-model="loginForm.username">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="login_button">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //登陆表单初始值
      loginForm: {
        username: 'admin',
        password: '123'
      },
      //表单验证
      loginFormRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '用户名长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password:[
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 5, message: '密码长度在 3 到 5 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    login(){
      this.$refs.loginFormRef.validate(val=> {
        if(!val) return;
        let loginParams = {username:this.loginForm.username,password:this.loginForm.password}
        console.log(loginParams);
        console.log(val)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 4px;

  .avatar_box {
    width: 160px;
    height: 160px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #eee;
    }
  }
}

.login_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 40px;
}

.login_button {
  display: flex;
  justify-content: center;
}
</style>