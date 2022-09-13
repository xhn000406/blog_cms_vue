<template>
  <div class="userLogin">
    <el-form :model="fromData" :rules="loginRules" ref="form" class="container">
      <el-form-item label="账号" prop="username" hide-required-asterisk>
        <el-input v-model="fromData.username" :suffix-icon="Edit"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" hide-required-asterisk>
        <el-input
          v-model="fromData.password"
          show-password
          @keyup.enter.native="loginBtn()"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="asscount-login">
      <el-button type="primary" @click="loginBtn()">点击登陆</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'

// 验证规则
import { loginRules } from './ruleOptions/index'
//使用商店
//创建路由实例
import { useRouter } from 'vue-router'
import { useStore } from '../../../store/useStore'

const store = useStore()

const fromData = reactive({
  username: '',
  password: ''
})

const form = ref()
const router = useRouter()
const loginBtn = () => {
  form.value.validate((vaile) => {
    if (vaile == true) {
      const result = store.loginAuth(fromData)
      if (result) {
        return router.push('/home')
      }
    }
  })
}
</script>

<style scoped lang="less">
.userLogin {
  height: 100%;
  width: 100%;

  .container {
    height: 480px;
    width: 90%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  el-form-item {
    padding-bottom: 20px;
  }
  .btnHandle {
    display: flex;
    justify-content: center;
  }
  .asscount-login {
    margin: 0px auto;
    margin-top: 22px;
    width: 250px;
    height: 28px;

    .el-button {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
