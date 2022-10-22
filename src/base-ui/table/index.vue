<template>
  <div class="pegShop">
    <div class="banner">
      <div class="banner_back">
        <div class="banner_main" v-if="isShowBack">
          <el-page-header
            title=" "
            @click="
              () => {
                router.back()
              }
            "
          ></el-page-header>
        </div>
        <h2>{{ title }}</h2>
      </div>
      <div class="topHandle">
        <div class="searchHandle" v-if="isShowTopHandle[0] == 'search'">
          <el-input v-model="Name"></el-input
          ><el-button type="primary" @click="searchHandle">查询</el-button>
        </div>
        <el-button
          type="primary"
          @click.prevent="addHandle"
          v-if="isShowTopHandle[1] == 'add'"
          >增加

          <hn-dialog
            v-model:formData="formData"
            :isShowDiglog="isShowDiglog"
            v-model:modelValue="isShowDiglog"
            :defaultInfo="defaultInfo"
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
            :src="scope.row.imgUrl"
            :initial-index="0"
            fit="cover"
            :preview-src-list="[scope.row.imgUrl]"
            :z-index="999"
          />
        </div>
      </template>

      <template #buttonHandle="scope" v-if="isShowButtonHandle">
        <el-button
          type="primary"
          v-if="isShowButtonHandle[0] == 'edit'"
          @click="editItem(scope.row.id)"
          >修改</el-button
        >
        <el-button
          type="primary"
          @click="deleItem(scope.row.id)"
          v-if="isShowButtonHandle[1] == 'del'"
          >删除</el-button
        >
      </template>

      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotname]="scope"
      >
        <template v-if="item.slotname">
          <slot :name="item.slotname" :row="scope.row"></slot>
        </template>
      </template>
    </hn-table>
    <div class="demo-pagination-block">
      <el-pagination
        v-if="isShowDate"
        layout="total, prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import hnTable from '../hn-table/index'
import HnDialog from '../hn-dialog/index.vue'

// import { tableOptions, dialogOptions } from './config/city'

import { ref, onMounted, watch, reactive } from 'vue'
import { useRouter } from 'vue-router'

//事件发送
const emits = defineEmits([
  'editItem',
  'handleItem',
  'searchItem',
  'sumbitItem',
  'delItem',
  'pageItem'
])
const prop = defineProps({
  isShowDate: {
    type: Boolean,
    default: true
  },
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
  },
  isShowBack: {
    type: Boolean,
    default: false
  },
  isShowTopHandle: {
    type: Array,
    default: ['search', 'add']
  },
  isShowButtonHandle: {
    type: Array,
    default: ['edit', 'del']
  },
  total: {
    type: Number,
    default: 100
  }
})

const router = useRouter()

const defaultInfo = ref()
const formData = ref({})
let flag = ref(0)
const isShowDiglog = ref(false)

const otherPropSlots = prop.tableOptions.map((item) => {
  switch (item.slotname) {
    case 'img':
      return false
    case 'buttonHandle':
      return false
    default:
      break
  }
  return item
})

// 搜索
const Name = ref('')
const searchHandle = async () => {
  emits('searchItem', Name.value)
}

//添加
const addHandle = () => {
  isShowDiglog.value = true
  if (flag.value == 0) {
    formData.value = {}
    flag.value = 1
  }
}

// 提交
const sumbitValue = async (e) => {
  flag.value = 0
  emits('sumbitItem', e)
}

//修改
const currentHandle = (e) => {
  formData.value = e
  emits('handleItem', e)
}

//编辑
const editItem = (e) => {
  isShowDiglog.value = true
  if (flag.value == 0) {
    formData.value = {}
    flag.value = 1
  }
  defaultInfo.value = formData.value

  emits('editItem', e)
}
//删除
const deleItem = async (e) => {
  emits('delItem', e)
}

//分页
const handleCurrentChange = (e) => {
  emits('pageItem', (e - 1) * 10)
}
</script>

<style scoped lang="less">
.pegShop {
  background-color: white;
  width: 100%;
  height: 100%;
}
.banner_back {
  display: flex;
}
.banner_main {
  display: flex;
}
.demo-pagination-block {
  display: flex;
  justify-content: end;
  padding-bottom: 10px;
  padding-right: 10px;
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
