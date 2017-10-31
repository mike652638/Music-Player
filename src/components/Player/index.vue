<template>
  <div class="player" v-show="playList.length > 0">
    <div class="normal-player" v-show="fullScreen">
      播放器
    </div>
    <div class="min-player" v-show="!fullScreen"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'player',
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList'
    ])
  }
}
</script>
<style lang="less" scoped>
  .player {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: #222;
  }
</style>
