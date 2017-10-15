<template>
  <div class="scroll-wrap" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    click: {
      click: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click
      })
    },
    refresh() {
      this.scroll.refresh()
    },
    scrollTo() {
      this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    onScroll() {
      this.scroll.on('scroll', () => {
        console.log(1)
      })
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.refresh()
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
