<template>
  <div class="login-container">
    <h1>智慧服务平台</h1>
    <div class="login-form">
      <h2>欢迎登录</h2>
      <el-form ref="form" :rules="rules" :model="loginForm">
        <el-form-item prop="username">
          <el-input
            v-model.trim="loginForm.username"
            placeholder="请输入账号"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            clearable
            v-model.trim="loginForm.password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify">
            <el-input
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <el-image @click.stop="handleCodeRefresh" :src="codeImageUrl" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-button"
            :loading="loadingStatus"
            @click="handleVerifyForm"
            type="danger"
            >{{ loadingStatus ? '登录中...' : '立即登录' }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserApi from '../../api/user'
import { mapActions } from 'vuex'

export default {
  name: 'index',
  data() {
    return {
      // loading加载状态
      loadingStatus: false,
      // 验证码路径
      codeImageUrl: '',
      // 登录参数
      loginForm: {
        username: 'duck',
        password: 'admin888',
        code: '',
        token: ''
      },
      // 登录表单验证规则
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.handleGetCaptcha()
  },
  methods: {
    /**
     * 调用接口获取验证码
     */
    async handleGetCaptcha() {
      const res = await UserApi.getCaptcha()
      console.log(res)
      this.codeImageUrl = res.captchaImg
      this.loginForm.token = res.token
    },
    /**
     * 验证码刷新
     */
    handleCodeRefresh() {
      this.loginForm.code = ''
      this.handleGetCaptcha()
    },
    /**
     * 登录表单校验
     */
    handleVerifyForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin()
        }
      })
    },
    /**
     * 登录提交
     */
    async handleSubmitLogin() {
      try {
        const token = await this.login(this.loginForm)
        if (!token) return
        this.$notify({ title: '提示', message: '登录成功', type: 'success' })
        this.loadingStatus = true
        await this.$router.push('/profile')
      } catch (e) {
        console.log(e)
      } finally {
        this.loadingStatus = false
      }
    },
    /**
     * vuex登录
     */
    ...mapActions({
      login: 'user/login'
    })
  }
}
</script>

<style scoped>
.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  font-family: Verdana;
  /* background-size: cover; */
  background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F911%2F0RQ5122445%2F150RQ22445-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660180018&t=91989361cbf2577d1637093e13b7cf48') no-repeat;
  background-size: 100% 100%;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-top: 70px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 5px;
}
h2 {
  color: #000;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
}
.login-form {
  margin: 10% auto 13%;
  width: 20%;
}
.verify {
  width: 100%;
  display: flex;
  align-items: center;
}
.el-image {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.login-button {
  width: 100%;
  border-radius: 5px;
}
</style>
