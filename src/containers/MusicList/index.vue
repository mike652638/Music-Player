<template>
  <div class="music-list">
    <div class="list-wrap">
      <div data-v-b9196334="" class="back">
        <i data-v-b9196334="" class="icon-back"></i>
      </div>
      <h2 class="title">{{data.singer_name}}</h2>
      <div class="bg-image" :style="bgImage"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicList',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
  },
  computed: {
    bgImage() {
      return `background-image: url(https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.data.singer_mid}.jpg?max_age=2592000)`
    }
  },
  watch: {
  }
}
</script>
<style lang="less" scoped>
.music-list {
  .list-wrap {
    .back {
      position: absolute;
      top: 0;
      left: 6px;
      z-index: 100;
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
      z-index: 40;
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
    }
  }
}
</style>
