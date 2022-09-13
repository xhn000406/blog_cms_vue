<template>
  <div id="container">
    <el-tabs type="border-card" :stretch="true" class="container_top">
      <el-tab-pane label="用户登陆" class="container_top">
        <LoginUserLogin></LoginUserLogin>
      </el-tab-pane>
      <el-tab-pane label="用户注册" class="container_top">
        <LoginUserRegister></LoginUserRegister>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import LoginUserLogin from './login-userLogin.vue'
import LoginUserRegister from './login-userRegister.vue'
</script>

<style scoped lang="less">
#container {
  width: 40%;
}
.container_top {
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important ;
}
</style>
