import httpRequest from '@/request/index'

export function apiGetRecordData() {
  return httpRequest({
    url: '/record',
    method: 'get'
  })
}
