<template>
  <div id="header-userinfo">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-icon style="padding-right: 4px"><user></user></el-icon>
        {{ store.$state.username
        }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="changeIsShow">个人信息</el-dropdown-item>
          <DialogUserInfo
            :centerDialogVisible="isShow"
            @emitCenterDialogVisible="
              (e) => {
                isShow = e
              }
            "
          ></DialogUserInfo>
          <el-dropdown-item @click="backInfo">返回主页</el-dropdown-item>
          <el-divider />
          <el-dropdown-item @click="exitLogin">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowDown, User } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useStore } from '../../../utils/login'
import DialogUserInfo from '../../../components/dialog_userInfo.vue'

const store = useStore()
const router = useRouter()

const isShow = ref(false)

const changeIsShow = () => {
  isShow.value = true
}

const exitLogin = () => {
  router.push('/login')
}

const backInfo = () => {
  router.push('/login')
}
</script>

<style scoped lang="less">
#header-userinfo {
  padding-right: 14px;
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
