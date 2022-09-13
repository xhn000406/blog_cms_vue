import httpRequest from '@/request/index'

// 获取用户信息
export function apiGetShopData(params) {
  return httpRequest({
    url: '/shop',
    method: 'get',
    params
  })
}

//删除
export function apiDelShopData(data) {
  return httpRequest({
    url: `/shop/${data}`,
    method: 'delete'
  })
}

//增加
export function apiAddShopData(data) {
  return httpRequest({
    url: '/shop',
    method: 'post',
    data
  })
}

//改
export function apiEditShopData(data) {
  return httpRequest({
    url: '/shop',
    method: 'PATCH',
    data
  })
}

export function apiGetMusicData() {
  return httpRequest({
    url: '/music',
    method: 'get'
  })
}

export function apiGetKitData() {
  return httpRequest({
    url: '/kit',
    method: 'get'
  })
}
