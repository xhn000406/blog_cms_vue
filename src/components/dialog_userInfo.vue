<template>
  <div>
    <el-dialog
      v-model="centerDialogVisible"
      title="用户信息"
      width="30%"
      center
    >
      <span
        >It should be noted that the content will not be aligned in center by
        default</span
      >
      <template #footer>
        <span class="dialog-footer">
          <el-button
            @click="
              () => {
                emits('emitCenterDialogVisible', false)
              }
            "
            >Cancel</el-button
          >
          <el-button
            type="primary"
            @click="
              () => {
                emits('emitCenterDialogVisible', false)
              }
            "
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emits = defineEmits(['emitCenterDialogVisible'])

const props = defineProps({
  centerDialogVisible: {
    type: Boolean
  }
})

watch(
  () => props.centerDialogVisible,
  (newValue) => {
    emits('emitCenterDialogVisible', newValue)
  }
)
</script>

<style lang="scss" scoped></style>
