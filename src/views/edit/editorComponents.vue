<template>
  <Transition name="slide-fade">
    <div v-show="isshow" class="editor">
      <div class="main">
        <div class="main_title">编译器</div>
        <div class="main_content">
          <div>
            <el-form>
              <!-- <template v-for="item in dialogOptions" :key="item.label"> -->
              <el-form-item label="标题" label-width="60px">
                <!-- <el-input v-model="newFormData[`${item.prop}`]" /> -->
                <el-input
                  placeholder="请输入文章标题"
                  v-model="formData.title"
                ></el-input>
                <!-- select -->
              </el-form-item>
              <el-form-item label="封面" label-width="60px">
                <el-upload
                  action="#"
                  ref="elUploadRef"
                  :auto-upload="false"
                  class="avatar-uploader"
                  :before-upload="beforeUpload"
                  :http-request="uploadHttpRequest"
                  :show-file-list="false"
                >
                  <img
                    v-if="formData.imgUrl"
                    :src="formData.imgUrl"
                    class="avatar-uploader"
                  />
                  <el-icon><Plus /></el-icon>
                </el-upload>
              </el-form-item>
              <!-- </template> -->
            </el-form>
          </div>
        </div>
        <div class="main_bottom">
          <el-button type="primary" @click="saveItem">保存</el-button>
          <el-button @click="itemCencel">取消</el-button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'

import { watch, ref, computed, onMounted } from 'vue'
import { uploadAvatar } from '../../request/upload'
import { useStore } from '../../store/editStore'

const emits = defineEmits(['update:isshow', 'update:valueHtml', 'sendData'])

const props = defineProps({
  isshow: {
    type: Boolean,
    default: false
  },
  valueHtml: {
    type: String,
    default: false
  }
})

const store = useStore()

let elUploadRef = ref()
let avatar = ref('')
const formData = computed(() => store.edit)
const falseShow = ref()

const itemCencel = () => {
  falseShow.value = false
  emits('update:isshow', false)
}

const uploadHttpRequest = async () => {
  const formDa = new FormData()
  formDa.append('avatar', avatar.value)
  const { data: res } = await uploadAvatar(formDa)
  formData.value.imgUrl = res.fileName
}

const beforeUpload = (file) => {
  avatar.value = file
}

const saveItem = async () => {
  await elUploadRef.value.submit()
  console.log(formData.value)
  emits('sendData', formData.value)
  emits('update:isshow', false)
}

watch(
  () => props.valueHtml,
  (n) => {
    formData.value.valueHtml = n
    emits('update:valueHtml', formData.value.valueHtml)
  },
  {
    deep: true
  }
)

watch(
  () => props.isshow,
  (n) => {
    emits('update:isshow', n)
  }
)

// 获取数据
onMounted(async () => {
  await store.getData(1)
})
</script>

<style lang="less" scoped>
.editor {
  width: 300px;
  height: 700px;
  position: fixed;
  background-color: gray;
  right: 0px;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.main {
  width: 95%;
  height: 95%;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-uploader {
  width: 90px;
  height: 90px;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.main_content {
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.main_title {
  margin-bottom: 30px;
  font-size: 24px;
}
.elUpload {
  border-radius: 50% !important;
  margin-bottom: 10px;

  text-align: center;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
