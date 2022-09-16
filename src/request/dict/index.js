import httpRequest from '@/request/index'

export function apiGetData() {
  return httpRequest({
    url: '/dict',
    method: 'get'
  })
}

export function apiDelData(id) {
  return httpRequest({
    url: `/dict${id}`,
    method: 'post'
  })
}

export function apiAddData(data) {
  return httpRequest({
    url: '/dict',
    method: 'post',
    data
  })
}

export function apiUpdateData(data) {
  return httpRequest({
    url: `/dict${id}`,
    method: 'post',
    data
  })
}
