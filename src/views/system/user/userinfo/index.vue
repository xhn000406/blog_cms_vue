<template>
  <div>
    <Table
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData"
      @del-item="delItem"
      @search-item="searchItem"
      @handle-item="handleItem"
      @sumbit-item="sumbitItem"
    ></Table>
  </div>
</template>

<script setup>
import Table from '../../../../base-ui/table/index.vue'
import { tableOptions } from './config/city'
import {
  apiGetUserData,
  apiDelUserData,
  apiAddUserData,
  apiEditUserData
} from '../../../../request/user'
import { onMounted, ref } from 'vue'

const title = ref('用户管理')
let tableData = ref([])
//api

onMounted(() => {
  getData()
})

const getData = async () => {
  const { data: res } = await apiGetUserData()
  tableData.value = res
}

const delItem = async (e) => {
  await apiDelUserData(e)
  await getData()
}

const searchItem = async (e) => {
  const { data: res } = await apiGetUserData(e)
  tableData.value = res
}

const sumbitItem = async (e) => {
  if (e.id) {
    apiEditUserData(e)
    return await getData()
  }
  await apiAddUserData(e)
  await getData()
}
</script>

<style scoped></style>
