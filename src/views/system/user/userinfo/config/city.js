import { ref } from 'vue'
export const tableOptions = [
  {
    prop: 'id',
    label: 'id'
  },
  {
    prop: 'username',
    label: '用户',
    type: 'text',
    isShow: 'true'
  },
  {
    prop: 'password',
    label: '密码',
    type: 'text',
    isShow: 'true'
  },
  {
    label: '操作',
    slotname: 'buttonHandle'
  }
]
