import httpRequest from '@/request/index'

// 获取用户信息
export function apiGetUserData(params) {
  return httpRequest({
    url: '/user',
    method: 'get',
    params
  })
}

//删除
export function apiDelUserData(data) {
  return httpRequest({
    url: `/user/${data}`,
    method: 'delete'
  })
}

//增加
export function apiAddUserData(data) {
  return httpRequest({
    url: '/user',
    method: 'post',
    data
  })
}

//改
export function apiEditUserData(data) {
  return httpRequest({
    url: '/user',
    method: 'PATCH',
    data
  })
}
