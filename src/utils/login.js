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
    async getLoginData(payload) {},
    saveBreadCrumb(data) {
      this.$state.breadCrumb = data
      localUtil.saveLocal('bereadCrumb', data)
    }
  }
})
