<template>
  <div class="slider" ref="slider">
    <div class="slider-group clearfix" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dots-item" v-for="(i, index) in dots" :key="i" :class="{'active': currentIndex === index}">
      </span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
// import { addClass } from 'common/js/dom'
export default {
  name: 'slider',
  data() {
    return {
      dots: [],
      currentIndex: 0
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 1500
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._setSliderWidth()
      this._initSliderScroll()
      this._initDots()
      if (this.autoPlay) {
        this._autoPlay()
      }
    })
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
    _setSliderWidth(isResize) {
      // 图片数
      this.sliderChildren = this.$refs.sliderGroup.children
      // content + padding
      let clientWidth = this.$refs.slider.clientWidth
      // 图片个数
      let picLength = this.sliderChildren.length
      if (picLength && !isResize) {
        picLength += 2
      }
      // 设置父元素宽度为窗口宽+图片个数
      this.$refs.sliderGroup.style.width = clientWidth * picLength + 'px'
      // 设置图片宽度
      void [].map.call(this.sliderChildren, (el) => {
        el.style.width = clientWidth + 'px'
      })
    },
    _initSliderScroll() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
    },
    _initDots() {
      this.dots = new Array(this.sliderChildren.length - 2)
      this.slider.on('scrollEnd', () => {
        let currentIndex = this.slider.getCurrentPage().pageX - 1
        this.currentIndex = currentIndex
        this._autoPlay()
      })
      this.slider.on('beforeScrollStart', () => {
        clearTimeout(this.timer)
      })
    },
    _autoPlay() {
      let page = this.currentIndex + 1
      this.timer = setTimeout(() => {
        page++
        this.slider.goToPage(page, 0, 400)
      }, this.interval)
    }
  }
}
</script>
<style lang="less" scoped>
.slider {
  overflow: hidden;
  position: relative;
  .slider-group {
    .pic-list {
      float: left;
      img {
        width: 100%;
      }
    }
  }
  .dots {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    text-align: center;
    .dots-item {
      display: inline-block;
      margin: 0 5px;
      border-radius: 4px;
      width: 8px;
      height: 8px;
      background-color: hsla(0, 0%, 100%, .5);
      &.active {
        width: 20px;
        background-color: hsla(0, 0%, 100%, .8);
      }
    }
  }
}
</style>
