<template>
  <div class="pegShop">
    <div class="banner">
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div class="topHandle">
        <div class="searchHandle">
          <el-input v-model="Name"></el-input
          ><el-button type="primary" @click="searchHandle">查询</el-button>
        </div>
        <el-button type="primary" @click="addHandle"
          >增加商品

          <hn-dialog
            v-model:formData="formData"
            :isShowDiglog="isShowDiglog"
            v-model:modelValue="isShowDiglog"
            @sumbitValue="sumbitValue"
            :dialogOptions="tableOptions"
          ></hn-dialog>
        </el-button>
      </div>
    </div>
    <hn-table
      :tableData="tableData"
      :tableProp="tableOptions"
      @currentValue="currentHandle"
    >
      <template #img="scope">
        <div class="demo-image__preview">
          <el-image
            style="width: 100px; height: 100px"
            :src="'/api' + scope.row.img"
            :initial-index="0"
            fit="cover"
          />
        </div>
      </template>

      <template #buttonHandle="scope">
        <el-button type="primary" @click="editItem(scope.row.id)"
          >修改</el-button
        >
        <el-button type="primary" @click="deleItem(scope.row.id)"
          >删除</el-button
        >
      </template>
    </hn-table>
  </div>
</template>

<script setup>
import hnTable from '../hn-table/index'
import HnDialog from '../hn-dialog/index.vue'

// import { tableOptions, dialogOptions } from './config/city'

import { ref, onMounted, watch } from 'vue'

const prop = defineProps({
  title: {
    type: String,
    require: true
  },
  tableData: {
    type: Array,
    default: []
  },
  tableOptions: {
    type: Array,
    default: []
  }
})

const emits = defineEmits([
  'editItem',
  'handleItem',
  'searchItem',
  'sumbitItem',
  'delItem'
])

const formData = ref({})
const Name = ref('')
const isShowDiglog = ref(false)

const searchHandle = async () => {
  emits('searchItem', Name.value)
}

const addHandle = () => {
  formData.value = {}
  isShowDiglog.value = true
}

const sumbitValue = async (e) => {
  emits('sumbitItem', formData.value)
}

const currentHandle = (e) => {
  formData.value = e
  console.log(e)
  emits('handleItem', e)
}

const editItem = (e) => {
  isShowDiglog.value = true
  emits('editItem', e)
}
const deleItem = async (e) => {
  emits('delItem', e)
}
</script>

<style scoped lang="less">
.pegShop {
  background-color: white;
  width: 100%;
  height: 100%;
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
.searchHandle {
  width: 300;
  display: flex;
}
.topHandle {
  width: 350px;
  display: flex;
  justify-content: space-around;
}
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
