import { defineStore } from 'pinia'
import { UpdateUserData, getUserInfoData } from '../request/auth'
import { uploadAvatar } from '../request/upload'
import { localUtil } from '../utils/localUtil'

export const useStore = defineStore('authStore', {
  state: () => ({
    nickName: '',
    hotMail: '',
    introduction: '',
    fileName: ''
  }),
  getters: {},
  actions: {
    async getInfoData() {
      const id = localUtil.setLocal('id')
      const result = await getUserInfoData(id)
      this.nickName = result.data.result[0].nickname
      this.hotMail = result.data.result[0].hotmail
      this.introduction = result.data.result[0].introduction
      this.fileName = result.data.result[0].avatar
    },
    async upDateInfo(fileData, formData) {
      const id = localUtil.setLocal('id')
      const result = await uploadAvatar(fileData)
      const { fileName } = result.data
      formData.fileName = fileName
      await UpdateUserData(id, formData)
      await this.getInfoData()
    }
  }
})
