import httpRequest from '@/request/index'

export function apiGetAuthData(data) {
  return httpRequest({
    url: '/login',
    method: 'post',
    data
  })
}

export function UpdateUserAvatar(id, data) {
  return httpRequest({
    url: `/userAvatar/${id}`,
    method: 'post',
    data
  })
}
