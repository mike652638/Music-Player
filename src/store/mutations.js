import * as types from './mutations-types'
const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_TOPFIXED](state, fixed) {
    state.topFixed = fixed
  }
}
export default mutations
