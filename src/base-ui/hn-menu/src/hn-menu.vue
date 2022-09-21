<template>
  <div id="hnMenu">
    <div class="title">商城管理系统</div>
    <!-- 🔛 -->
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      router
    >
      <template v-for="item in MenuData" :key="item.id">
        <template v-if="item.isSingle">
          <el-menu-item :index="'/' + item.url">
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>

        <template v-else>
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="Menu in item.children" :key="Menu.id">
              <el-menu-item :index="'/' + Menu.url">
                <span>{{ Menu.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu></template
        >
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps, ref } from 'vue'

defineProps({
  MenuData: {
    type: Object,
    require: true
  }
})

const router = useRouter()
const defaultActive = ref(router.currentRoute.value.fullPath)
</script>

<style scoped>
.title {
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
}
</style>
