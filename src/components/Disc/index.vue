<template>
 <transition name="slide">
  <music-list :bgImage="bgImage" :title="title" />
 </transition>
</template>
<script>
import MusicList from "components/MusicList"
import { mapGetters } from 'vuex'
import { getSongList } from '../../api/recommend'
import { ERR_OK } from '../../api/config'
export default {
  data() {
    return {
    }
  },
  created() {
    this._getSongList()
  },
  computed: {
    title() {
      return this.disc.dissname
    },
    bgImage() {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      getSongList(this.disc.dissid, {
        param: 'jsonpCallback',
      }).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((musicData) => {
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  watch: {
  },
  components: {
    MusicList
  }
}
</script>
<style lang="less" scoped>
&.slide-enter-active,
&.slide-leave-active {
	transition: all 0.5s;
}
&.slide-enter,
&.slide-leave-to {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
</style>
