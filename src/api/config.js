// 轮播图
export const recommendUrl = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
export const commonParam = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}
export const recommendCptions = {
  param: 'jsonpCallback'
}

// 推荐歌单
export const musicListUrl = '/api/getMusicList'
export const musicListParam = {
  rnd: Math.random(),
  g_tk: 1928093487,
  format: 'json',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  hostUin: 0,
  platform: 'yqq',
  needNewCode: 0,
  categoryId: 10000000,
  sortId: 5,
  sin: 0,
  ein: 30
}

// 歌手列表
export const singerListUrl = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
export const singerListParam = {
  channel: 'singer',
  page: 'list',
  key: 'all_all_all',
  pagesize: 100,
  pagenum: 1,
  g_tk: 5381,
  jsonpCallback: '',
  loginUin: 0,
  hostUin: 0,
  format: 'jsonp',
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'yqq',
  needNewCode: 0
}
export const singetListOpts = {
  param: 'jsonpCallback',
  prefix: 'GetSingerListCallback'
}
// 成功状态码
export const ERR_OK = 0
