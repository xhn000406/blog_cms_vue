<template>
  <div class="pegShop">
    <div class="bottom_handle">
      <div>编译文章</div>
      <div @click="itemIsshow" style="padding-right: 10px">
        <el-button>编辑</el-button>
      </div>
      <!-- <div @click="btnSend"><el-button type="primary">发送</el-button></div> -->
    </div>
    <div class="editor_main">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
    <EditorComponents
      v-model:isshow="isShow"
      v-model:valueHtml="valueHtml"
      @sendData="
        (e) => {
          formData = e
        }
      "
    ></EditorComponents>
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted, computed } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import EditorComponents from './editorComponents.vue'
import { useStore } from '../../store/editStore'
import { useRoute } from 'vue-router'
import { apiaddData, apiGetEditData } from '../../request/edit'

const store = useStore()
const route = useRoute()
const editorRef = shallowRef()
const isShow = ref(false)
const mode = ref('default')
const formData = ref({})
// 内容 HTML
const valueHtml = ref('')

// 内容

// 模拟 ajax 异步获取内容
onMounted(async () => {
  const id = route.query.id
  if (id) {
    const { data: res } = await apiGetEditData(id)
    valueHtml.value = res[0].valueHtml
    console.log(valueHtml.value)
  }
})

const itemIsshow = () => {
  isShow.value = !isShow.value
}
const toolbarConfig = {}
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: {
      fieldName: 'avatar',
      server: '/api/profile',
      customInsert(res, insertFn) {
        // TS 语法
        // customInsert(res, insertFn) {                  // JS 语法
        // res 即服务端的返回结果
        insertFn(res.fileName)
        // 从 res 中找到 url alt href ，然后插入图片
      }
    }
  }
}
console.log(editorConfig)
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style lang="less" scoped>
.pegShop {
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bottom_handle {
  margin-top: 30px;
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  margin: 20px;
}
.editor_main {
  border: 1px solid #ccc;
  height: 100%;
}
</style>
