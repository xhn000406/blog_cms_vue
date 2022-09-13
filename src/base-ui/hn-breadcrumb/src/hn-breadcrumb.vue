<template>
  <div class="hn-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadCrumb" :key="item.id">
        <el-breadcrumb-item :to="{ path: item.url }">
          <h2>{{ item.name }}</h2>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const prop = defineProps({
  breadCrumb: {
    type: Object
  }
})
</script>
<style scoped lang="less">
.el-breadcrumb {
  h2 {
    cursor: pointer;
    font-size: 14px;
  }
}
</style>
