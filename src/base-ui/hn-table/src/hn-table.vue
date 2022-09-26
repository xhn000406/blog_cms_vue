<template>
  <div class="hn-table">
    <div class="banner">
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div class="slot_handle">
        <slot name="search"></slot>
        <slot name="create"></slot>
      </div>
    </div>
    <el-table
      :v-loading="true"
      :data="tableData"
      stripe
      style="width: 100%"
      highlight-current-row
      @selection-change="handleSelectionChange"
      @current-change="handleCurrentChange"
    >
      <template v-for="item in (tableProp as any)">
        <el-table-column align="center" :="item" :width="item.width">
          <template #default="scope">
            <slot :name="item.slotname" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="slot_bottom">
      <slot name="bottom_handle"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, defineEmits } from 'vue'

const emits = defineEmits(['CurrentValue'])

defineProps({
  title: { type: String, require: true },
  tableData: { type: Object, require: true },
  tableProp: { type: Array, require: true }
})

const getSelectionrows = (e) => {
  console.log(e)
}

const handleSelectionChange = (e) => {
  console.log(e)
}

const handleCurrentChange = (val) => {
  emits('CurrentValue', { ...val })
}
</script>

<style scoped lang="less">
.hn-table {
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
.slot_handle {
  display: flex;
}
.slot_bottom {
  margin-top: 70px;
  margin-right: 70px;
  display: flex;
  justify-content: flex-end;
}
</style>
