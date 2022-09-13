<template>
  <div>
    <Table
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData"
      @del-item="delItem"
      @search-item="searchItem"
      @sumbit-item="sumbitItem"
    >
      <template #img="scope">
        <div>{{ scope }}</div>
        <div class="demo-image__preview">
          <el-image style="width: 100px; height: 100px" :src="url" />
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup>
import Table from '../../../../base-ui/table/index.vue'
import { tableOptions } from './config/index'
import {
  apiGetShopData,
  apiDelShopData,
  apiEditShopData,
  apiAddShopData
} from '../../../../request/shop'
import { onMounted, ref } from 'vue'

const title = ref('商品管理')
let tableData = ref([])
//api

onMounted(() => {
  getData()
})

const getData = async () => {
  const { data: res } = await apiGetShopData()
  tableData.value = res
}

const delItem = async (e) => {
  await apiDelShopData(e)
  await getData()
}

const searchItem = async (e) => {
  const { data: res } = await apiGetShopData(e)
  tableData.value = res
}

const sumbitItem = async (e) => {
  if (e.id) {
    apiEditShopData(e)
    return await getData()
  }
  await apiAddShopData(e)
  await getData()
}
</script>

<style scoped></style>
