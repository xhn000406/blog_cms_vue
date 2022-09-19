import httpRequest from '@/request/index'

export function apiGetData(offset) {
  return httpRequest({
    url: `/dict?offset=${offset}`,
    method: 'get'
  })
}

export function apiDelData(id) {
  return httpRequest({
    url: `/dict/${id}`,
    method: 'delete'
  })
}

export function apiAddData(data) {
  return httpRequest({
    url: '/dict',
    method: 'post',
    data
  })
}

export function apiUpdateData(id, data) {
  return httpRequest({
    url: `/dict/${id}`,
    method: 'post',
    data
  })
}
