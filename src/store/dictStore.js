import { defineStore } from 'pinia'
import { apiGetData } from '../request/dict/index'

export const useStore = defineStore('dictStore', {
  state: () => ({
    dictData: []
  }),
  getters: {},
  actions: {
    async getData() {
      const { data: res } = await apiGetData()
      this.dictData = res
    }
  }
})
