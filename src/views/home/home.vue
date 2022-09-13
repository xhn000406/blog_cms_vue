<template>
  <div id="home">
    <el-container class="abc">
      <el-aside class="aside">
        <HnMenu :MenuData="MenuData" />
      </el-aside>
      <el-container>
        <el-header class="header">
          <HeaderContainer />
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HnMenu, { MenuData } from '../../base-ui/hn-menu/index'
import { provide } from 'vue'

import HeaderContainer from './components/header-container.vue'

provide('menuData', MenuData)
</script>
<style scoped lang="less">
#home {
  height: 100%;
  width: 100%;
}
.aside {
  width: 200px;
}
.header {
  background-color: pink;
}
.main {
  background-color: #f1f1f1fe;
}
.abc {
  height: 100%;
  width: 100%;
}
</style>
