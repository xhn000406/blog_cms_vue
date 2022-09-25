<template>
  <div id="article">
    <Table
      :is-show-back="true"
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData"
      :is-show-top-handle="false"
    >
      <template #Vhtml="scope">
        <div v-html="scope.row.valueHtml"></div>
      </template>

      <template #send="scope">
        <div v-if="scope.row.send == 1">已投稿</div>
        <div v-if="scope.row.send == 0">未投稿</div>
      </template>

      <template #isSwaper="scope">
        <div v-if="scope.row.isSwaper == 1">已轮播</div>
        <div v-if="scope.row.isSwaper == 0">未轮播</div>
      </template>

      <template> </template>

      <template #articleHandle="scope">
        <div>
          <el-button type="primary" @click="pushEditor(scope.row)"
            >编辑</el-button
          >
          <el-button type="primary" @click="deleteItem(scope.row)"
            >删除</el-button
          >
          <el-button type="primary" @click="sendItem(scope.row)"
            >发布</el-button
          >
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup>
import { tableOptions } from './config'
import Table from '../../../base-ui/table/index.vue'
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '../../../store/articleStore'
import {
  apiDeleteArticleData,
  apiSendArticleData
} from '../../../request/article'

const title = ref('')
const route = useRoute()
const router = useRouter()
const store = useStore()
const tableData = computed(() => store.article)
let id

const pushEditor = (e) => {
  console.log(e.id)
  router.push(`/home/editor?id=${e.id}`)
}

const deleteItem = async (e) => {
  await apiDeleteArticleData(e.id)
  await store.getData(id)
}

const sendItem = async (e) => {
  console.log(123)
  await apiSendArticleData(e.id)
  await store.getData(id)
}

onMounted(async () => {
  title.value = route.query.title
  id = route.query.id
  await store.getData(id)
})
</script>

<style lang="less" scoped>
.el-button {
  width: 44px;
}
</style>
