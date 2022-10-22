<template>
  <div id="article">
    <Table
      :is-show-back="true"
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData.result"
      :total="tableData.count"
      :is-show-top-handle="false"
      @pageItem="pageItem"
    >
      <template #Vhtml="scope">
        <div v-html="scope.row.valueHtml" class="valueHtml"></div>
      </template>

      <template #send="scope">
        <div v-if="scope.row.send == 1">已投稿</div>
        <div v-if="scope.row.send == 0">未投稿</div>
      </template>

      <template #isSwaper="scope">
        <div v-if="scope.row.isSwaper == 1">已轮播</div>
        <div v-if="scope.row.isSwaper == 0">未轮播</div>
      </template>

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
import Table from '../../../../base-ui/table/index.vue'
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  apiDeleteArticleData,
  apiSendArticleData,
  apiGetArticleData
} from '../../../../request/article'

const title = ref('')
const route = useRoute()
const router = useRouter()
const tableData = ref([])
let id

const pushEditor = (e) => {
  console.log(e.id)
  router.push(`/home/editor?id=${e.id}`)
}

const deleteItem = async (e) => {
  await apiDeleteArticleData(e.id)
  await initData()
}

const sendItem = async (e) => {
  console.log(123)
  await apiSendArticleData(e.id)
  await initData()
}

onMounted(async () => {
  initData()
})

const initData = async () => {
  title.value = route.query.title
  id = route.query.id
  const { data: res } = await apiGetArticleData(id)
  tableData.value = res
}

const pageItem = async (e) => {
  const { data: res } = await apiGetArticleData(id, e)
  tableData.value = res
}
</script>

<style lang="less" scoped>
.el-button {
  width: 44px;
}
.valueHtml {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
