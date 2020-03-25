import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'get',
    data
  });
}

export function getInfo(token) {
  console.log('token : ' + token);
  return request({
    url: '/api/user/info',
    method: 'get',
    params: { token }
  });
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  });
}
