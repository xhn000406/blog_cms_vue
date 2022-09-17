import { defineStore } from 'pinia'
import { apiDelData, apiGetData, apiUpdateData } from '../request/dict/index'

export const useStore = defineStore('dictStore', {
  state: () => ({
    dictData: []
  }),
  getters: {},
  actions: {
    async getData(offset) {
      const { data: res } = await apiGetData(offset)
      this.dictData = res
    },
    async delData(e) {
      await apiDelData(e)
      await this.getData()
    },
    async updateData(e) {
      await apiUpdateData(e)
      await this.getData()
    }
  }
})
