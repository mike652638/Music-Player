<template>
  <div class="my-progress-circle">
    <svg :width="radius" :height="radius" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-background" :cx="radius/2" :cy="radius/2" :r="radius/2" fill="transparent" />
      <circle class="progress-bar" :cx="radius/2" :cy="radius/2" :r="radius/2" fill="transparent" :stroke-dasharray="dasharray" :stroke-dashoffset="dashoffset" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'progress-circle',
    data() {
      return {
        dasharray: 314
      }
    },
    props: {
      percent: {
        type: Number,
        default: 0
      },
      radius: {
        type: Number,
        default: 32
      }
    },
    watch: {},
    filters: {},
    methods: {},
    computed: {
      dashoffset() {
        return (1 - this.percent) * this.dasharray
      }
    },
    created() { },
    mounted() { },
    destroyed() { }
  }
</script>

<style lang="less" scoped>
  @import '~@/common/less/const.less';
  .my-progress-circle {
  	position: relative;
  	svg {
  		position: absolute;
      top: 0;
      transform: translateY(-50%);
  	}
  	circle {
  		stroke-width: 3px; /*no*/
  		transform-origin: center;
  		&.progress-background {
  			transform: scale(0.9);
  			stroke: #fff;
  		}
  		&.progress-bar {
  			transform: scale(0.9) rotate(-90deg);
  			stroke: #31c27c;
  		}
  	}
  }
</style>
