import { defineStore } from 'pinia'
import { localUtil } from '../utils/localUtil'

export const useStore = defineStore('loginStore', {
  state: () => ({
    id: 0,
    username: localUtil.setLocal('username') ?? '',
    token: localUtil.setLocal('token') ?? '',
    breadCrumb: localUtil.setLocal('breadCrumb') ?? ''
  }),
  getters: {},
  actions: {
    saveBreadCrumb(data) {
      this.$state.breadCrumb = data
      console.log(data)
      localUtil.saveLocal('bereadCrumb', data)
    }
  }
})
