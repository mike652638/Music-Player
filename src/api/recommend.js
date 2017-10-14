import jsonp from 'common/js/jsonp'
import axios from 'axios'
export function getRecommend(url, data, opts) {
  return jsonp(url, data, opts)
}
export function getMusicList(url, data, opts) {
  return axios.get(url, {
    params: data
  })
}
