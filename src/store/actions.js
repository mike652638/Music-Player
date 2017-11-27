// 当要多次操作muation时，需要定义actions
import * as types from './mutations-types'
import { playMode } from 'common/js/config'
import { shuffle } from 'common/js/util'
export const selectPlay = function({ commit, state }, { list, index }) {
	commit(types.SET_SEQUENCE_LIST, list)
	commit(types.SET_PLAY_LIST, list)
	commit(types.SET_CURRENT_INDEX, index)
	commit(types.SET_FULL_SCREEN, true)
	commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function({ commit }, { list }) {
	commit(types.SET_PLAY_MODE, playMode.random)
	commit(types.SET_SEQUENCE_LIST, list)
	let randomList = shuffle(list)
	commit(types.SET_PLAY_LIST, randomList)
	commit(types.SET_CURRENT_INDEX, 0)
	commit(types.SET_PLAYING_STATE, true)
	commit(types.SET_FULL_SCREEN, true)
}
