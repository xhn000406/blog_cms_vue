<template>
  <div class="userInfo">
    <div class="demo">
      <div class="title">个人信息修改</div>
      <div class="container">
        <div class="main">
          <div class="elUpload">
            <el-upload
              action="#"
              ref="elUploadRef"
              :auto-upload="false"
              class="avatar-uploader"
              :before-upload="demo"
              :http-request="uploadHttpRequest"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </div>
          <!-- 表单 -->
          <div class="fromData">
            <el-form label-width="100px" :model="form" style="max-width: 460px">
              <el-form-item label="昵称">
                <el-input v-model="form.name" />
              </el-form-item>
              <el-form-item label="qq邮箱">
                <el-input v-model="form.region" />
              </el-form-item>
              <el-form-item label="简介">
                <el-input v-model="form.desc" type="textarea" />
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="bottomHandle">
          <div>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElUpload } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { UpdateUserAvatar } from '../../request/auth'

let elUploadRef = ref()
let avatar = ref()
const form = reactive({
  name: '',
  region: '',
  type: '',
  desc: ''
})
const imageUrl = ref('')

const uploadHttpRequest = () => {
  const formData = new FormData()
  formData.append('avatar', avatar.value)
  console.log(formData)
  UpdateUserAvatar(1, formData)
}

const demo = (file) => {
  avatar.value = file
  console.log(avatar.value)
}

const onSubmit = async () => {
  await elUploadRef.value.submit()
}
</script>

<style lang="less" scoped>
.title {
  padding-top: 10px;
  font-size: 24px;
  padding-bottom: 70px;
}
.main {
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userInfo {
  // box-shadow: 10px 10px 10px 10px #f;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 10px 10px 10px #f1f1f1;
}
.container {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
}
.fromData {
  width: 500px;
  height: 300px;
}
.elUpload {
  width: 400px;
  height: 400px;
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
