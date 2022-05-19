import request from '@/utils/request'

// 登录
export function login(data) {
  // 返回一个promise对象
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户基本资料
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

// 根据用户ID获取用户详情
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout() {

}
