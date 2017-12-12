<template>
 <div class="recommend">
  <scroll ref="scrollWrap" class="scroll-wrapper" :data="songList">
   <div>
    <div class="slider-wrap" v-if="picData.length">
     <slider>
      <div class="pic-list" v-for="i in picData" :key="i.id">
       <a :href="i.linkUrl">
        <img class="needsclick" @load="loadImage" :src="i.picUrl" alt="">
       </a>
      </div>
     </slider>
    </div>
    <div class="recommend-list">
     <div class="list-wrap">
      <h1 class="title">热门歌单推荐</h1>
      <ul class="content">
       <li @click="selectItem(i)" class="content-item" v-for="i in songList" :key="i.id">
        <div class="list-pic">
         <img v-lazy="i.imgurl" alt="" width="60" height="60">
        </div>
        <div class="list-content">
         <h2 class="name">{{i.creator.name}}</h2>
         <p class="dissname">{{i.dissname}}</p>
        </div>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </scroll>
  <div class="content-loading-wrap">
   <loading :show="!songList.length" />
  </div>
  <router-view></router-view>
 </div>
</template>
<script>
import { getRecommend, getMusicList } from 'api/recommend'
import * as config from 'api/config'
import Slider from 'containers/Slider'
import Loading from 'containers/Loading'
import Scroll from 'containers/Scroll'
import BScroll from 'better-scroll'
import axios from 'axios'
import { playlistMixin } from 'common/js/mixin'
import { mapMutations } from "vuex"

export default {
  name: 'recommend',
  mixins: [playlistMixin],
  data() {
    return {
      picData: [],
      songList: [],
    }
  },
  created() {
    this.getRecommendPic()
    this.getRecommendMusicList()
  },
  methods: {
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? '60px' : ''
      this.$refs.scrollWrap.$el.style.bottom = bottom
      this.$refs.scrollWrap.refresh()
    },
    getRecommendPic() {
      getRecommend(config.recommendUrl, config.commonParam, config.recommendCptions).then((res) => {
        if (res.code === config.ERR_OK) {
          this.picData = res.data.slider
        }
      })
    },
    getRecommendMusicList() {
      getMusicList(config.musicListUrl, config.musicListParam).then((res) => {
        if (res.data.code === config.ERR_OK) {
          this.songList = res.data.data.list
        }
      }).catch((error) => {
        console.log('代理失败，请求假数据')
        setTimeout(() => {
          this.songList = require('../../../static/recommand.json').data.list
        }, 2000)
      })
    },
    loadImage() {
      if (!this.checkLoad) {
        this.checkLoad = true
      } else {
        return
      }
      this.$refs.scrollWrap.refresh()
    },
    selectItem(item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      })
      this.setDisc(item)
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  },
  components: {
    Slider,
    Loading,
    Scroll
  }
}
</script>
<style lang="less" scoped>
.recommend {
	.scroll-wrapper {
		background: #fff;
		position: fixed;
		overflow: hidden;
		top: 59px;
		left: 0;
		right: 0;
		bottom: 0;
  }
  .slider-wrap {
    height: 168px;
  }
	.recommend-list {
		.list-wrap {
			.title {
				height: 65px;
				line-height: 65px;
				text-align: center;
				font-size: 14px;
				color: #31c27c;
			}
			.content {
				.content-item {
					padding: 0 20px 20px 20px;
					display: flex;
					.list-pic {
						flex: 0 0 60px;
						width: 60px;
						padding-right: 20px;
					}
					.list-content {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.name {
							line-height: 20px;
							font-size: 14px;
							margin-bottom: 10px;
							color: #000;
						}
						.dissname {
							line-height: 20px;
							font-size: 14px;
							color: #000;
						}
					}
				}
			}
		}
	}
	.content-loading-wrap {
		margin-top: 20px;
	}
}
</style>
