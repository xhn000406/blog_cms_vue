<template>
  <div id="dict">
    <Table
      :title="title"
      :table-options="tableOptions"
      :table-data="tableData"
      @del-item="delItem"
      @search-item="searchItem"
      @sumbit-item="sumbitItem"
      @page-item="pageItem"
      :is-show-top-handle="['', 'add']"
      :is-show-date="false"
    >
      <template #dictName="scope">
        <div class="dict_color" @click="pushArticle(scope.row)">
          {{ scope.row.dict_name }}
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { tableOptions } from './config/index'
import { useStore } from '../../../store/dictStore'

import Table from '../../../base-ui/table/index.vue'
import { useRouter } from 'vue-router'

const title = ref('字典管理')

const router = useRouter()
const store = useStore()
const offset = ref(0)
const delItem = async (e) => {
  await store.delData(e)
}

let tableData = computed(() => store.dictData)

const searchItem = (e) => {}

const sumbitItem = async (e) => {
  if (e.id) {
    await store.updateData(e)
  } else {
    await store.addData(e)
  }
}

const pageItem = async (e) => {
  await store.getData(e)
}

onMounted(async () => {
  await store.getData(offset.value)
})
</script>

<style lang="less" scoped></style>
