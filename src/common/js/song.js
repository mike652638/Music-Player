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
}
export function createSong({musicData}) {
  return new Song({
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.singer_mid}.jpg?max_age=2592000`
  })
}
