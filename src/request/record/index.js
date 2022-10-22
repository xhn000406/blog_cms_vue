import httpRequest from '@/request/index'

export function apiGetRecordData(page) {
  return httpRequest({
    url: `/record?page=${page}`,
    method: 'get'
  })
}
