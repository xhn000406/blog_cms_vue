<template>
  <div class="header-container">
    <HnBreadcrumb :bread-crumb="breadCrumb"></HnBreadcrumb>
    <HeaderUserinfo></HeaderUserinfo>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { localUtil } from '../../../utils/localUtil'
import HnBreadcrumb from '../../../base-ui/hn-breadcrumb/src/hn-breadcrumb.vue'
import HeaderUserinfo from './header-userinfo.vue'

import { useRouter, useRoute } from 'vue-router'
import { useStore } from '../../../utils/login'

const MenuData = inject('menuData')
const router = useRouter()
const route = useRoute()
const store = useStore()

const breadCrumb = ref(
  localUtil.setLocal('bereadCrumb') ?? [
    { name: '购物商城系统', url: '' },
    { name: '欢迎光临', url: '' }
  ]
)
watch(
  () => router.currentRoute.value,
  (toPath) => {
    MenuData.find((item) => {
      let href = router.currentRoute.value.fullPath.slice(1)
      if (href === item.url && !item.children) {
        if (breadCrumb.value.length != 1) {
          breadCrumb.value.pop()
        }
        breadCrumb.value[0].name = item.title
      }
      if (item.children) {
        item.children.find((aitem) => {
          if (`/${aitem.url}` === toPath.path) {
            breadCrumb.value = [{}]
            breadCrumb.value[0].name = item.title

            breadCrumb.value.push({
              name: aitem.title,
              url: toPath.path
            })
            // breadCrumb.value[1].name = aitem.title
            // breadCrumb.value[1].url = toPath.path
          }
        })
      }
    })
  }
)
</script>

<style scoped lang="less">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>
