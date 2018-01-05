// import { getLyric } from '../../api/song'
// import { ERR_OK } from '../../api/config'
// import { Base64 } from 'js-base64'

// export default class Song {
// 	constructor({ id, mid, singer, name, album, duration, image, url }) {
// 		this.id = id
// 		this.mid = mid
// 		this.singer = singer
// 		this.name = name
// 		this.album = album
// 		this.duration = duration
// 		this.image = image
// 		this.url = url
// 	}
// 	getLyric() {
// 		if (this.lyric) {
// 			return Promise.resolve(this.lyric)
// 		}
// 		return new Promise((resolve, reject) => {
// 			getLyric(this.mid).then(res => {
// 				if (res.retcode === ERR_OK) {
// 					resolve((this.lyric = Base64.decode(res.lyric)))
// 				} else {
// 					reject(`no lyric`)
// 				}
// 			})
// 		})
// 	}
// }
// export function createSong({ musicData }) {
// 	return new Song({
// 		image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${
// 			musicData.singer_mid
// 		}.jpg?max_age=2592000`
// 	})
// }
import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
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
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
    // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=9035189320&vkey=E1855E70EC9F14732A36333C49CB21DB0EED85C04B45D28E1A4ADDAFFF9765453E5D61DDC21D51372F4DA294919736FB8CFBB94B683CD013&uin=&fromtag=999`
    url: `http://isure.stream.qqmusic.qq.com/C10${musicData.songid}.m4a?fromtag=32`
  })
}

export function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

