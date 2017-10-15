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
