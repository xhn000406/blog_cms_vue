<template>
  <div class="pegShop">
    <div class="bottom_handle">
      <div @click="itemIsshow" style="padding-right: 10px">
        <el-button>编辑</el-button>
      </div>
      <div @click="btnSend"><el-button type="primary">发送</el-button></div>
    </div>
    <div style="border: 1px solid #ccc">
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

const store = useStore()

const editorRef = shallowRef()
const isShow = ref(true)
const mode = ref('default')
const formData = ref({})
// 内容 HTML
const valueHtml = ref('')

// 内容

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = store.edit.valueHtml
  }, 1500)
})

const btnSend = async (e) => {
  console.log(formData.value.title)

  if (formData.value.title == undefined) {
    alert('asdsa')
  } else {
    await store.addData(formData.value)
  }
}

const itemIsshow = () => {
  isShow.value = !isShow.value
}
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

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
  justify-content: end;
  margin: 10px;
}
</style>
