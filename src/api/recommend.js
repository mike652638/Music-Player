import jsonp from 'common/js/jsonp'
export function getRecommend(url, data, opts) {
  return jsonp(url, data, opts)
}
