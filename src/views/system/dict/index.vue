<template>
  <div id="dict">
    <Table
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData"
      @del-item="delItem"
      @edit-item="editItem"
      @search-item="searchItem"
      @handle-item="handleItem"
      @sumbit-item="sumbitItem"
      @page-item="pageItem"
    >
    </Table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { tableOptions } from './config/index'
import { useStore } from '../../../store/dictStore'

import Table from '../../../base-ui/table/index.vue'

const title = ref('字典管理')

const store = useStore()
const offset = ref(0)
const delItem = async (e) => {
  await store.delData(e)
}

let tableData = computed(() => store.dictData)

const searchItem = (e) => {
  console.log('search')
}

const editItem = (e) => {
  //   store.updateData(e)
  console.log(123)
}

const handleItem = (e) => {
  console.log(e)
}

const sumbitItem = (e) => {
  console.log('subitItem')
}

const pageItem = async (e) => {
  await store.getData(e)
}

onMounted(async () => {
  await store.getData(offset.value)
})
</script>

<style lang="less" scoped></style>
