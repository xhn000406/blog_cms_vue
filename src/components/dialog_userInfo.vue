<template>
  <div>
    <el-dialog
      v-model="centerDialogVisible"
      title="用户信息"
      width="30%"
      center
    >
      <div class="container">
        <div class="avatar">
          <el-upload
            :auto-upload="false"
            class="elUpload"
            ref="uploadRef"
            list-type="picture-card"
            :show-file-list="true"
            :on-remove="handleRemove"
          >
            <el-icon><Plus /></el-icon>
          </el-upload>
        </div>
        <div class="info">
          <el-form
            label-width="100px"
            v-model="formLabelAlign"
            style="max-width: 460px"
          >
            <el-form-item label="昵称">
              <el-input v-model="formLabelAlign.nickName" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            @click="
              () => {
                emits('emitCenterDialogVisible', false)
              }
            "
            >取消</el-button
          >
          <el-button type="primary" @click="saveItem">保存</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const emits = defineEmits(['emitCenterDialogVisible'])

const props = defineProps({
  centerDialogVisible: {
    type: Boolean
  }
})
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const uploadRef = ref()
const formLabelAlign = reactive({
  nickName: ''
})

watch(
  () => props.centerDialogVisible,
  (newValue) => {
    emits('emitCenterDialogVisible', newValue)
  }
)

const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const saveItem = () => {
  emits('emitCenterDialogVisible', false)
  console.log(uploadRef)
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.avatar {
  width: 150px;
  height: 150px;
  background-color: beige;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.info {
  width: 100%;
  height: 100%;
  background-color: blanchedalmond;
}
.elUpload {
  border-radius: 50% !important;
}
</style>
