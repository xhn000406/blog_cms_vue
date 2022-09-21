import httpRequest from '@/request/index'

export function apiGetArticleData(id, offset) {
  return httpRequest({
    url: `/article?id=${id}&offset=${offset}`,
    method: 'get'
  })
}
