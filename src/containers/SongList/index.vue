<template>
  <div class="song-list">
    <ul class="songs-wrap">
      <li v-for="i in songs" :key="i.id" class="item">
        <div class="content">
          <p class="name">{{i.musicData.albumname}}</p>
          <p class="desc">{{i.musicData.singer[0].name}} - {{i.musicData.songname}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Loading from "containers/Loading";
import { mapMutations } from "vuex";
export default {
  name: "SongList",
  props: {
    songs: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    Loading
  }
};
</script>
<style lang="less" scoped>
.song-list {
  background: #222;
  padding: 20px 30px;
  .item {
    height: 64px;
    font-size: 14px;
    .content {
      .name {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #fff;
      }
      .desc {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 4px;
        color: hsla(0, 0%, 100%, 0.3);
      }
    }
  }
}
</style>
