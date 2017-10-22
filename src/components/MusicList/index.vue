<template>
  <div class="music-list">
    <div class="back" :class="active" @click="goBack">
      <i class="icon-back"></i>
    </div>
    <h2 class="title" :class="active">{{data.singer_name}}</h2>
    <div class="bg-image" :class="{'active': topFixed}" :style="bgImage">
      <div class="filter"></div>
    </div>
    <Scroll class="scroll-wrap" ref="Scroll" :listenScroll="true" @scroll="scroll">
      <song-list :songs="data.list" />
    </Scroll>
    <loading :show="showLoading" />
  </div>
</template>
<script>
import Loading from "containers/Loading"
import Scroll from "containers/Scroll"
import SongList from "containers/SongList"
export default {
  name: "MusicList",
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
      showLoading: true
    };
  },
  computed: {
    bgImage() {
      if (!this.data.singer_mid) {
        return;
      }
      return `background-image: url(https://y.gtimg.cn/music/photo_new/T001R300x300M000${this
        .data.singer_mid}.jpg?max_age=2592000)`;
    },
    topFixed() {
      console.log(this.scrollY)
      if (this.scrollY > 250) {
        return true
      } else {
        return false
      }
    },
    active() {
      return !this.topFixed
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    scroll(pos) {
      this.scrollY = -pos.y;
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.$refs.Scroll.refresh()
        this.showLoading = false        
      });
    }
  },
  components: {
    SongList,
    Scroll,
    Loading
  }
};
</script>
<style lang="less" scoped>
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
    top: 290px;
    z-index: 100;
    background: #222;
  }
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 100;
    &.active {
      z-index: 101;
    }
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
    z-index: 100;
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
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }
    &.active {
      padding-top: 10%;
      z-index: 120;
    }
  }
}
</style>
