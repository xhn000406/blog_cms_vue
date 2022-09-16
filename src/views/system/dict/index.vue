<template>
  <div id="dict">
    <Table
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData"
      @del-item="delItem"
      @search-item="searchItem"
      @handle-item="handleItem"
      @sumbit-item="sumbitItem"
    >
    </Table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { tableOptions } from './config/index'
import { useStore } from '../../../store/dictStore'

import Table from '../../../base-ui/table/index.vue'

const title = ref('字典管理')
let tableData = ref([])

const store = useStore()

const delItem = () => {
  console.log('del')
}

const searchItem = () => {
  console.log('search')
}

const handleItem = () => {
  console.log('handle')
}

const sumbitItem = () => {
  console.log('subitItem')
}

onMounted(async () => {
  await store.getData()
  tableData.value = store.dictData
})
</script>

<style lang="less" scoped></style>
