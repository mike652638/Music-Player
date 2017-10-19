<template>
  <div class="music-list">
    <div class="list-wrap" :class="{'active': topFixed}">
      <div class="back">
        <i class="icon-back" @click.stop.prevent="goBack"></i>
      </div>
      <h2 class="title">{{data.singer_name}}</h2>
      <div class="bg-image" :class="{'active': topFixed}" :style="bgImage"></div>
    </div>
    <song-list :songs="data.list" />
  </div>
</template>
<script>
import SongList from "containers/SongList";
import { mapGetters } from "vuex";
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
  created() {},
  computed: {
    ...mapGetters(["topFixed"]),
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
    }
  },
  components: {
    SongList
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
  .list-wrap {
    &.active {
      height: 40px;
      z-index: 1000;
    }
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
      &.active {
        padding-top: 40px;
        z-index: 10000;
      }
    }
  }
}
</style>
