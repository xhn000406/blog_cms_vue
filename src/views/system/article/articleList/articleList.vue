<template>
  <div id="article">
    <el-drawer v-model="drawer" :title="drawerList.title">
      <div v-html="drawerList.content"></div>
    </el-drawer>
    <Table
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData.result"
      :total="tableData.count"
      :is-show-top-handle="['', '']"
      @pageItem="pageItem"
    >
      <template v-slot:topHandle>
        <el-scrollbar>
          <div class="scrollbar-flex-content" style="margin-top: 20px">
            <el-radio-group
              v-model="defaultType"
              size="small"
              @change="changeType"
            >
              <template v-for="item in defaultList" :key="item.label">
                <el-radio-button :label="item.id">{{
                  item.dict_name
                }}</el-radio-button></template
              >
            </el-radio-group>
          </div>
        </el-scrollbar>
      </template>

      <template #Vhtml="scope">
        <div v-html="scope.row.valueHtml" class="valueHtml"></div>
      </template>

      <template #send="scope">
        <div v-if="scope.row.isSend == 1" class="isAction">已投稿</div>
        <div v-if="scope.row.isSend == 0" class="action">未投稿</div>
      </template>

      <template #isSwaper="scope">
        <div v-if="scope.row.isSwaper == 1" class="isAction">已轮播</div>
        <div v-if="scope.row.isSwaper == 0" class="action">未轮播</div>
      </template>

      <template #articleHandle="scope">
        <div>
          <el-button type="primary" @click="pushEditor(scope.row)"
            >编辑</el-button
          >
          <el-button type="primary" @click="deleteItem(scope.row)"
            >删除</el-button
          >
          <el-button type="primary" @click="previewItem(scope.row)"
            >预览</el-button
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
import { useStore } from '../../../../store/dictStore'

const route = useRoute()
const router = useRouter()
const dictStore = useStore()

const title = ref('文章列表')
const tableData = ref([])
const drawer = ref(false)
const drawerList = ref({
  title: '',
  content: ''
})
const defaultType = ref(1)
const defaultList = computed(() => dictStore.dictData)

let id

const changeType = async (e) => {
  defaultType.value = e
  await initData()
}

const pushEditor = (e) => {
  console.log(e.id)
  router.push(`/home/editor?id=${e.id}`)
}

const deleteItem = async (e) => {
  await apiDeleteArticleData(e.id)
  await initData()
}

// const sendItem = async (e) => {
//   //发布
//   await apiSendArticleData(e.id)
//   await initData()
// }

const previewItem = (e) => {
  drawer.value = true
  drawerList.value.title = e.title
  drawerList.value.content = e.valueHtml
}

onMounted(async () => {
  await dictStore.getData()
  await initData()
  console.log(defaultList)
})

const initData = async () => {
  const { data: res } = await apiGetArticleData(defaultType.value)
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
#article {
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.valueHtml {
  display: -webkit-box; //谷歌
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; //显示几行

  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
p {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
.isAction {
  color: green;
}
.action {
  color: red;
}
</style>
