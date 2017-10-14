<template>
  <div class="recommend" ref="scrollWrap">
    <div class="scroll-wrap">
      <div class="slider-wrap" v-if="picData.length">
        <slider>
          <div class="pic-list" v-for="i in picData" :key="i.id">
            <a :href="i.linkUrl">
              <img :src="i.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <div class="list-wrap">
          <h1 class="title">热门歌单推荐</h1>
          <ul class="content">
            <li class="content-item" v-for="i in songList" :key="i.id">
              <div class="list-pic">
                <img :src="i.imgurl" alt="" width="60" height="60">
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
  </div>
</template>
<script>
import { getRecommend, getMusicList } from 'api/recommend'
import * as config from 'api/config'
import Slider from 'containers/Slider'
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'recommend',
  data() {
    return {
      picData: [],
      songList: []
    }
  },
  created() {
    this.getRecommendPic()
    this.getRecommendMusicList()
    this.initScroll()
  },
  methods: {
    getRecommendPic() {
      getRecommend(config.recommendUrl, config.commonParam, config.recommendCptions).then((res) => {
        if (res.code === config.ERR_OK) {
          this.picData = res.data.slider
          this.initScroll()
        }
      })
    },
    getRecommendMusicList() {
      getMusicList(config.musicListUrl, config.musicListParam).then((res) => {
        if (res.data.code === config.ERR_OK) {
          this.songList = res.data.data.list
          this.initScroll()
        }
      })
    },
    initScroll() {
      this.$nextTick(() => {
        if (this.slider) {
          this.slider.refresh()
          return
        }
        this.slider = new BScroll(this.$refs.scrollWrap, {
          click: true
        })
      })
    }
  },
  components: {
    Slider
  }
}
</script>
<style lang="less" scoped>
.recommend {
  position: fixed;
  overflow: hidden;
  top: 88px;
  left: 0;
  right: 0;
  bottom: 0;
  .recommend-list {
    .list-wrap {
      .title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: 14px;
        color: #ffcd32;
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
              color: #fff;
            }
            .dissname {
              line-height: 20px;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.3);
            }
          }
        }
      }
    }
  }
}
</style>
