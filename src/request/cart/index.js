import httpRequest from '@/request/index'

export function apiGetCartData(query) {
  return httpRequest({
    url: `/cart/${query}`,
    method: 'get'
  })
}

export function apiAddCartData(data) {
  return httpRequest({
    url: '/cart',
    method: 'post',
    data
  })
}
export function apiDelCartData(data) {
  return httpRequest({
    url: `/cart/${data}`,
    method: 'delete'
  })
}
