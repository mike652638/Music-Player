<template>
  <Scroll class="scroll-wrap" ref="Scroll" :listenScroll="true">
    <div class="song-list">
        <ul class="songs-wrap">
          <li v-for="i in songs" :key="i.id" class="item">
            <div class="content">
              <p class="name">{{i.musicData.albumname}}</p>
              <p class="desc">{{i.musicData.singer[0].name}} - {{i.musicData.songname}}</p>
            </div>
          </li>
        </ul>
        <loading :show="showLoading" />
    </div>
  </Scroll>
</template>
<script>
import Scroll from "containers/Scroll";
import Loading from "containers/Loading";
import { mapMutations } from "vuex";
export default {
  name: "SongList",
  data() {
    return {
      topFixd: false,
      showLoading: true
    };
  },
  props: {
    songs: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  watch: {
    songs() {
      this.$nextTick(() => {
        this.showLoading = false;
        this.$refs.Scroll.refresh();
      });
    }
  },
  methods: {
    ...mapMutations({
      setTopFixed: "SET_TOPFIXED"
    })
  },
  components: {
    Scroll,
    Loading
  }
};
</script>
<style lang="less" scoped>
.scroll-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 290px;
  z-index: 100;
  background: #222;
}
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
