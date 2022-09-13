import { defineStore } from 'pinia'
import { apiAddCartData, apiGetCartData, apiDelCartData } from '../request/cart'
import { localUtil } from '../utils/localUtil'

export const useStore = defineStore('cartStore', {
  state: () => ({
    cart: []
  }),
  getters: {},
  actions: {
    async getCartData() {
      const query = localUtil.setLocal('userId')
      const { data: res } = await apiGetCartData(query)
      this.cart = res
    },
    async addCartData(shopId) {
      const userId = localUtil.setLocal('userId')
      const params = {
        userId,
        shopId
      }
      const { data: res } = await apiAddCartData(params)
      this.cart = res
    },
    async delCartData() {
      const query = localUtil.setLocal('userId')
      const { data: res } = await apiDelCartData(query)
      this.cart = res
    }
  }
})
