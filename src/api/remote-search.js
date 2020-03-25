import request from '@/utils/request';

export function searchUser(name) {
  return request({
    url: '/vue-hairless-admin/search/user',
    method: 'get',
    params: { name }
  });
}

export function transactionList(query) {
  return request({
    url: '/vue-hairless-admin/transaction/list',
    method: 'get',
    params: query
  });
}
