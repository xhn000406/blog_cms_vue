import { defineStore } from 'pinia'
import { apiaddData, apiGetEditData } from '../request/edit'
import { apiGetData } from '../request/dict'
import { localUtil } from '../utils/localUtil'

export const useStore = defineStore('editStore', {
  state: () => ({
    edit: { title: '', valueHtml: '', imgUrl: '', articleType: '' },
    dict: []
  }),
  getters: {},
  actions: {
    async getDictData() {
      const { data: res } = await apiGetData()
      this.dict = res
    },

    async getData(id) {
      const { data: res } = await apiGetEditData(id)
      this.edit = res[0]
    }
  }
})
