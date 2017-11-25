import { getLyric } from '../../api/song'
import { ERR_OK } from '../../api/config'
import {Base64} from 'js-base64'

export default class Song {
	constructor({ id, mid, singer, name, album, duration, image, url }) {
		this.id = id
		this.mid = mid
		this.singer = singer
		this.name = name
		this.album = album
		this.duration = duration
		this.image = image
		this.url = url
	}
	getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
		return new Promise((resolve, reject) => {
      getLyric(this.mid).then(res => {
        if (res.retcode === ERR_OK) {
          resolve(this.lyric = Base64.decode(res.lyric))
        } else {
          reject(`no lyric`)
        }
      })
    })
	
	}
}
export function createSong({ musicData }) {
	return new Song({
		image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${
			musicData.singer_mid
		}.jpg?max_age=2592000`
	})
}
