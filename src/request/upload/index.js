import httpRequest from '@/request/index'

export function uploadAvatar(data) {
  return httpRequest({
    url: `/profile`,
    method: 'post',
    data
  })
}
