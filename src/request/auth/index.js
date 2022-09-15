import httpRequest from '@/request/index'

export function apiGetAuthData(data) {
  return httpRequest({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfoData(id) {
  return httpRequest({
    url: `/userInfo/${id}`,
    method: 'get'
  })
}

export function UpdateUserData(id, data) {
  return httpRequest({
    url: `/userInfo/${id}`,
    method: 'post',
    data
  })
}
