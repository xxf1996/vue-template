<template>
  <div class="login">
    <el-card>
      <el-form class="login-form" ref="loginForm" :rules="rules">
        <el-form-item prop="uesrname"> 
          <el-input type="text" v-model="loginData.username" placeholder="用户名">
            <i slot="prepend" class="fa fa-user-circle-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginData.password" placeholder="密码">
            <i slot="prepend" class="fa fa-keyboard-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input type="text" v-model="loginData.code" placeholder="- - - -">
            <template slot="prepend">验证码</template>
            <template slot="append">
              <identify :identifyCode="identifyCode" :content-width="80" :content-height="35" @click.native="refreshCode"></identify>
            </template>
          </el-input>
        </el-form-item>
        <el-button size="default" @click="submit" type="primary" class="login-btn">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import identify from './Identify.vue'
import {mapActions} from 'vuex'

export default {
  name: 'Login',
  components: {
    identify
  },
  data () {
    return {
      loginData: {
        username: 'console@doupai.cc',
        password: 'console',
        code: ''
      },
      // 校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      code: '1234567890abcdefghijklmnopqrstuvwsyz',
      identifyCode: ''
    }
  },
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),
    /**
     * @description 提交表单
     */
    // 提交登录信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid && this.loginData.code === this.identifyCode) {
          this.login({
            vm: this,
            account: this.loginData.username,
            pwd: this.loginData.password
          })
        } else {
          // 登录表单校验失败
          this.$message.error('表单校验失败')
        }
      })
    },
    makeCode (l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.code[this.randomNum(0, this.code.length)]
      }
    },
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(4)
    }
  },
  mouted () {
    this.makeCode(4)
  }
}
</script>

<style lang="scss" scoped>
  .button-login {
    width: 100%;
  }
</style>
