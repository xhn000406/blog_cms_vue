import httpRequest from '@/request/index'

export function apiGetArticleData(id, page) {
  return httpRequest({
    url: `/article?id=${id}&page=${page}`,
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
