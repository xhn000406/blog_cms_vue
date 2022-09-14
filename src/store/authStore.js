import { defineStore } from 'pinia'

export const useStore = defineStore('authStore', {
  state: () => ({
    id: '',
    username: ''
  }),
  getters: {},
  actions: {}
})
