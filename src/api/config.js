// 轮播图
export const recommendUrl = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

export const commonParam = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const musicListUrl = '/api/getMusicList'

export const recommendCptions = {
  param: 'jsonpCallback'
}
// 推荐歌单
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

export const ERR_OK = 0
