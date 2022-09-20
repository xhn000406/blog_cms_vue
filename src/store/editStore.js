import { defineStore } from 'pinia'
import { apiaddData, apiGetData } from '../request/edit'

import { localUtil } from '../utils/localUtil'

export const useStore = defineStore('editStore', {
  state: () => ({
    edit: { title: '', valueHtml: '', imgUrl: '' }
  }),
  getters: {},
  actions: {
    async addData(data) {
      await apiaddData(data)
    },
    async getData(id) {
      const { data: res } = await apiGetData(id)
      this.edit = res[0]

      console.log(this.edit)
    }
  }
})
