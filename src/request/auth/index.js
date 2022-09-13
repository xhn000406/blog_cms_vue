import httpRequest from '@/request/index'

export function apiGetAuthData(data) {
  return httpRequest({
    url: '/login',
    method: 'post',
    data
  })
}
