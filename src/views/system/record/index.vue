<template>
  <div id="record">
    <Table
      title="评论文字"
      :table-data="tableData.result"
      :tableOptions="tableOptions"
      :is-show-top-handle="false"
      @pageItem="pageItem"
      :total="tableData.count"
      :isShowButtonHandle="false"
    ></Table>
  </div>
</template>

<script setup>
import Table from '../../../base-ui/table/index.vue'
import { tableOptions } from './config/index.js'
import { ref, onMounted } from 'vue'
import { apiGetRecordData } from '../../../request/record/index.js'

const tableData = ref([])

onMounted(async () => {
  await initData()
})

const initData = async (page) => {
  const { data: res } = await apiGetRecordData(page)

  tableData.value = res
}

const pageItem = (e) => {
  console.log(typeof e)
  initData(e)
}
</script>

<style lang="less" scoped>
#record {
  background-color: white;
  border-radius: 10px;
  width: 100%;
}
</style>
