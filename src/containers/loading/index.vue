<template>
  <div class="loading" v-if="show">
    <div class="loading-wrap">
      <img src="./img/loading.gif" alt="" height="30px;">
      <div class="info">玩命加载中...</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less" scoped>
.loading {
  .loading-wrap {
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    position: absolute;
    text-align: center;
    .info {
      font-size: 12px;
    }
  }
}
</style>
