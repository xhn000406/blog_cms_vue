<template>
  <div class="login">
    <div class="loginContainer">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp498217644.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665637914&t=7a35cb7bbdb753dbb92e85a296bbc49c"
        alt=""
      />
      <LoginContainer></LoginContainer>
    </div>
  </div>
</template>

<script setup>
import LoginContainer from './components/login-container.vue'
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 1000px;
  height: 600px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.loginContainer {
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  box-shadow: 1px 1px 80px black;
}
</style>
