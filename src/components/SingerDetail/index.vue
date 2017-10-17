<template>
  <transition name="fade">
    <div class="singer-detail">
    </div>
  </transition>
</template>
<script>
export default {
  name: 'scrollDetail'
}
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
  &.fade-enter-active,
  &.fade.leave-to {
    transition: all .5s;
  }
  &.fade-enter,
  &.fade-leave {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
