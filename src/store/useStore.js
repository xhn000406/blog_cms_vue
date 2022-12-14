import { defineStore } from 'pinia'
import { apiGetAuthData } from '../request/auth'
import { localUtil } from '../utils/localUtil'

export const useStore = defineStore('main', {
  state: () => ({
    id: '',
    username: ''
  }),
  getters: {},
  actions: {
    async loginAuth(e) {
      const { data: res } = await apiGetAuthData(e)
      localUtil.saveLocal('username', res.username)
      localUtil.saveLocal('token', res.token)
      localUtil.saveLocal('id', res.id)
    }
  }
})
