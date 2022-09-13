<template>
  <div>
    <el-dialog :model-value="isShowDiglog" title="增加编辑" center>
      <!-- form -->
      <el-form :model="newFormData">
        <template v-for="item in dialogOptions" :key="item.label">
          <el-form-item
            :label="item.label"
            label-width="300px"
            v-if="item.isShow == 'true'"
          >
            <template v-if="item.type == 'text'">
              <el-input
                v-model="newFormData[`${item.prop}`]"
                @blur="newFormData[`${item.prop}`] = $event.target.value.trim()"
              />
            </template>
            <!-- select -->
            <template v-else-if="item.type == 'select'">
              <el-select
                v-model="newFormData[`${item.prop}`]"
                :placeholder="item.placeholder"
              >
                <template v-for="items in item.options" :key="items.label">
                  <el-option :label="items.label" :value="items.value" />
                </template>
              </el-select>
            </template>
          </el-form-item>
        </template>
      </el-form>

      <!-- handle -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="escHandle">Cancel</el-button>
          <el-button type="primary" @click="sumbitHandle">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, defineEmits, computed, watch } from 'vue'

const props = defineProps({
  formData: {
    type: Object,
    defualt: () => {}
  },
  dialogOptions: {
    type: Array,
    default: () => []
  },
  isShowDiglog: {
    type: Boolean,
    default: false
  },
  newValue: {
    type: Object
  }
})
const newFormData = ref({})
const formData = ref({ ...props.formData })
watch(
  () => props.formData,
  (newVal) => {
    props.dialogOptions.forEach((item) => {
      console.log(newVal)
      newFormData.value[`${item.prop}`] = newVal[`${item.prop}`]
      emits('update:formData', newFormData.value)
    })
  },
  {
    deep: true
  }
)

const emits = defineEmits([
  'sumbitValue',
  'update:modelValue',
  'update:newValue',
  'update:formData'
])

const formLabelWidth = '140px'

const escHandle = () => {
  emits('update:modelValue', false)
}

const sumbitHandle = () => {
  let formData = {}
  props.dialogOptions.forEach((item) => {
    formData[item.prop] = item.value
  })
  emits('sumbitValue', formData)
  emits('update:modelValue', false)
}
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
