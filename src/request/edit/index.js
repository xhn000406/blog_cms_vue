import httpRequest from '@/request/index'

//增加
export function apiaddData(data) {
  return httpRequest({
    url: '/edit',
    method: 'post',
    data
  })
}

export function apiGetEditData(id) {
  return httpRequest({
    url: `/edit/${id}`,
    method: 'get'
  })
}

export function apiUpdateData(id, data) {
  return httpRequest({
    url: `/edit/${id}`,
    method: 'post',
    data
  })
}
