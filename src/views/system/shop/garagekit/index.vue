<template>
  <div>
    <Table :title="title" :table-options="tableOptions" :table-data="tableData">
    </Table>
  </div>
</template>

<script setup>
import Table from '../../../../base-ui/table/index.vue'
import { tableOptions } from './config/index'
import { apiGetKitData } from '../../../../request/shop'
import { onMounted, ref } from 'vue'

const title = ref('手办管理')
let tableData = ref([])
//api

onMounted(() => {
  getData()
})

const getData = async () => {
  const { data: res } = await apiGetKitData()
  tableData.value = res
}
</script>

<style scoped></style>
