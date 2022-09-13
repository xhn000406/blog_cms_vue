import { ref } from 'vue'
export const tableOptions = [
  {
    prop: 'id',
    label: 'id'
  },
  {
    prop: 'img',
    label: '图片',
    type: 'text',
    isShow: 'true',
    slotname: 'img'
  },
  {
    prop: 'text',
    label: '商品介绍',
    type: 'text',
    isShow: 'true'
  },
  {
    prop: 'price',
    label: '新价格',
    type: 'text',
    isShow: 'true'
  },
  {
    prop: 'oldPrice',
    label: '旧价格',
    type: 'text',
    isShow: 'true'
  },
  {
    prop: 'shopper',
    label: '售量',
    type: 'text',
    isShow: 'true'
  },
  {
    prop: 'shop',
    label: '商店',
    type: 'text',
    isShow: 'true'
  },
  {
    label: '操作',
    slotname: 'buttonHandle'
  }
]
