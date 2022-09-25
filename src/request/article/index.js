import httpRequest from '@/request/index'

export function apiGetArticleData(id, offset) {
  return httpRequest({
    url: `/article?id=${id}&offset=${offset}`,
    method: 'get'
  })
}

export function apiDeleteArticleData(id) {
  return httpRequest({
    url: `/article/${id}`,
    method: 'delete'
  })
}

export function apiSendArticleData(id) {
  return httpRequest({
    url: `/article/${id}`,
    method: 'post'
  })
}
