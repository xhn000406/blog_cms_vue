import { defineStore } from 'pinia'
import { apiGetArticleData } from '../request/article'

export const useStore = defineStore('editStore', {
  state: () => ({
    article: []
  }),
  getters: {},
  actions: {
    async getData(id) {
      const { data: res } = await apiGetArticleData(id)
      this.article = res
      console.log(this.article)
    }
  }
})
