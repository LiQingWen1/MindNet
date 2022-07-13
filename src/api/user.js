import request from '@/utils/request'

/**
 * 获取验证码接口
 * @returns {AxiosPromise}
 */
const getCaptcha = () => {
  return request({
    url: '/captcha',
    method: 'get'
  })
}

/**
 * 登录接口
 * @param data
 * @returns {AxiosPromise}
 */
const login = (data) => {
  return request({
    url:
      '/login?username=' +
      data.username +
      '&password=' +
      data.password +
      '&code=' +
      data.code +
      '&token=' +
      data.token,
    method: 'POST'
  })
}
export const getNav = () => {
  return request({ url: '/menu/nav', method: 'get' })
}
export const getInfo = () => {
  return request({ url: '/user/info', method: 'get' })
}
export const getList = () => {
  return request({ url: '/user/list', method: 'get' })
}
/**
 * 角色列表
 *  @returns
 */
export const getRoleList = () => {
  return request({ url: 'role/list', method: 'GET' })
}
/**
 * 菜单列表
 * @returns
 */
export const getMenuList = () => {
  return request({ url: 'menu/list', method: 'GET' })
}
/**
 * 导出api接口
 */
export default {
  getCaptcha,
  login
}
