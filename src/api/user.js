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

/**
 * 导出api接口
 */
export default {
  getCaptcha,
  login
}
