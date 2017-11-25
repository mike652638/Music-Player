<template>
 <div class="music-list">
  <div class="back" @click="goBack">
   <i class="icon-back"></i>
  </div>
  <h2 class="title">{{data.singer_name}}</h2>
  <div ref="bgImage" class="bg-image" :class="{'active': topFixed}" :style="bgImage">
   <div ref="playRef" v-show="!topFixed" class="play-wrapper">
    <div class="play" @click="playSongs">
     <i class="icon-play"></i>
     <span class="text">随机播放全部</span>
    </div>
   </div>
   <div class="filter"></div>
  </div>
  <div class="bg-layer" ref="bgLayer">
  </div>
  <Scroll class="scroll-wrap" ref="Scroll" :listen-scroll="true" :probe-type="3" @scroll="scroll">
   <song-list :songs="data.list" @select="selectItem" />
  </Scroll>
  <div class="load-wrap">
   <loading :show="showLoading" />
  </div>
 </div>
</template>
<script>
import Scroll from "containers/Scroll"
import Loading from "containers/Loading"
import SongList from "containers/SongList"
import { prefixStyle } from 'common/js/dom'
import { mapActions } from 'vuex'
import {playlistMixin} from 'common/js/mixin'
let transform = prefixStyle('transform')
const RESERVE_HEIGHT = 40
export default {
  name: "MusicList",
  mixins: [playlistMixin],
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      scrollY: 0,
      showLoading: true,
      topFixed: false
    }
  },
  computed: {
    bgImage() {
      if (!this.data.singer_mid) {
        return;
      }
      return `background-image: url(https://y.gtimg.cn/music/photo_new/T001R300x300M000${this
        .data.singer_mid}.jpg?max_age=2592000)`;
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    scroll(pos) {
      this.scrollY = pos.y;
    },
    playSongs() {
      this.randomPlay({
        list: this.data.list
      })
    },
    selectItem(item, index) {
      this.selectPlay({
        list: this.data.list,
        index
      })
    },
    ...mapActions([
      'selectPlay',
      'randomPlay'
    ]),
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? '60px' : ''
      this.$refs.Scroll.$el.style.bottom = bottom
      this.$refs.Scroll.refresh()
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.$refs.Scroll.refresh()
        this.showLoading = false
      })
    },
    scrollY(newY) {
      if (newY > 0) {
        this.$refs.bgImage.style[transform] = `scale(${(newY +
          this.imageHeight) /
          this.imageHeight})`
        this.$refs.bgImage.style.zIndex = 101
      } else if (`${(newY + this.imageHeight) / this.imageHeight}` <= 1) {
        this.$refs.bgImage.style.zIndex = 0
      }
      let translateHeight = -newY;
      if (translateHeight > this.imageHeight - RESERVE_HEIGHT) {
        translateHeight = this.imageHeight - RESERVE_HEIGHT
        this.$refs.bgImage.style.zIndex = 111
        this.topFixed = true
      } else {
        this.topFixed = false
      }

      this.$refs.bgLayer.style[transform] = `translate3d(0, ${-translateHeight}px, 0)`;
    }
  },
  mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.$refs.Scroll.$el.style.top = `${this.imageHeight}px`;
  },
  components: {
    SongList,
    Scroll,
    Loading
  }
};
</script>
<style lang="less" scoped>
@import '~common/less/const.less';
.music-list {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	.scroll-wrap {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: #222;
	}
	.back {
		position: absolute;
		top: 0;
		left: 6px;
		z-index: 121;
		.icon-back {
			display: block;
			padding: 10px;
			font-size: 22px;
			color: #ffcd32;
		}
	}
	.title {
		position: absolute;
		top: 0;
		left: 10%;
		z-index: 121;
		width: 80%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
		line-height: 40px;
		font-size: 18px;
		color: #fff;
	}
	.bg-image {
		position: relative;
		height: 0;
		width: 100%;
		padding-top: 70%;
		background-size: cover;
		.play-wrapper {
			position: absolute;
			bottom: 20px;
			z-index: 50;
			width: 100%;
			.play {
				box-sizing: border-box;
				width: 135px;
				padding: 7px 0;
				margin: 0 auto;
				text-align: center;
				border: 1px solid @color-theme;
				color: @color-theme;
				border-radius: 100px;
				font-size: 0;
				.icon-play {
					display: inline-block;
					vertical-align: middle;
					margin-right: 6px;
					font-size: @font-size-medium-x;
				}
				.text {
					display: inline-block;
					vertical-align: middle;
					font-size: @font-size-small;
				}
			}
		}
		&.active {
			padding-top: 10%;
		}
		.filter {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(7, 17, 27, 0.4);
		}
	}
	.bg-layer {
		position: relative;
		height: 100%;
		background: #222;
	}
}
</style>
