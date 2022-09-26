import { defineStore } from 'pinia'
import {
  apiAddData,
  apiDelData,
  apiGetData,
  apiUpdateData
} from '../request/dict/index'

export const useStore = defineStore('dictStore', {
  state: () => ({
    dictData: []
  }),
  getters: {},
  actions: {
    async getData(offset) {
      const { data: res } = await apiGetData(offset)
      this.dictData = res.result
    },
    async delData(e) {
      await apiDelData(e)
      await this.getData(0)

      console.log(this.dictData)
    },
    async updateData(e) {
      console.log(e.id)
      await apiUpdateData(e.id, e)
      await this.getData(0)
    },
    async addData(e) {
      await apiAddData(e)
      await this.getData()
    }
  }
})
