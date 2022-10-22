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
      :is-show-top-handle="['', '']"
      :isShowButtonHandle="false"
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

const title = ref('文章管理')

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

const pushArticle = (e) => {
  router.push(`/home/articlelist?title=${e.dict_name}&id=${e.id}`)
}

const pageItem = async (e) => {
  await store.getData(e)
}

onMounted(async () => {
  await store.getData(offset.value)
})
</script>

<style lang="less" scoped>
.dict_color {
  cursor: pointer;
  position: relative;
}
.dict_color::after {
  content: '';
  width: 5px;
  height: 5px;
  margin-top: 8.5px;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  margin-left: 14px;
  position: absolute;
  transition: all 0.3s;
  transform: rotate(-40deg);
}

.dict_color:hover::after {
  width: 10px;
  height: 10px;
  color: red;
}
</style>
