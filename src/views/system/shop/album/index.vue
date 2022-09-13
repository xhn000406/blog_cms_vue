<template>
  <div>
    <Table :title="title" :table-options="tableOptions" :table-data="tableData">
      <template #img="scope">
        <div>{{ scope }}</div>
        <div class="demo-image__preview">
          <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :preview-src-list="srcList"
            :initial-index="4"
            fit="cover"
          />
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup>
import Table from '../../../../base-ui/table/index.vue'
import { tableOptions } from './config/index'
import { apiGetMusicData } from '../../../../request/shop'
import { onMounted, ref } from 'vue'

const title = ref('专辑管理')
let tableData = ref([])
//api

onMounted(() => {
  getData()
})

const getData = async () => {
  const { data: res } = await apiGetMusicData()
  tableData.value = res
}
</script>

<style scoped></style>
