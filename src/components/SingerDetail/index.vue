<template>
  <transition name="fade">
    <div class="singer-detail">
      <music-list :data="singerDetail" />
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import * as config from "api/config";
import MusicList from "components/MusicList";
import { createSong } from "common/js/song";
export default {
  name: "scrollDetail",
  data() {
    return {
      singerDetail: {}
    };
  },
  computed: {
    ...mapGetters(["singer"])
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push("/singer");
        return;
      }
      let data = Object.assign({}, config.singerDetailParam, {
        singermid: this.singer.id
      });
      getSingerDetail(
        config.singerDetailUrl,
        data,
        config.singetDetailOpts
      ).then(res => {
        if (res.code === config.ERR_OK) {
          this.singerDetail = res.data;
        } else {
          console.log(`歌手详情失败, 返回歌手列表哦`);
        }
      });
    },
    _normallizeSongs(data) {
      // let arr = []
      // arr.push(createSong(data))
      // return arr
    }
  },
  components: {
    MusicList
  }
};
</script>
<style lang="less" scoped>
.singer-detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 3;
  background: #222;
  overflow: hidden;
}
.fade-enter-active,
.fade.leave-to {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave {
  transform: translate3d(100%, 0, 0);
}
</style>
