<template>
  <div id="record">
    <Table
      title="评论文字"
      :table-data="tableData"
      :tableOptions="tableOptions"
      :is-show-top-handle="false"
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
  const { data: res } = await apiGetRecordData()
  tableData.value = res.result
  console.log(tableData.value)
})
</script>

<style lang="less" scoped>
#record {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
</style>
