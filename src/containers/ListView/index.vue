<template>
  <div class="list-view">
    <scroll ref="scrollWrap" class="scoroll-wrapper" :data="data">
      <ul class="singer-wrap">
        <ul v-show="i.items.length>0" class="item" v-for="(i, index) in data" :key="i.id" ref="scrollItem">
          <h2 class="title">{{i.title}}</h2>
          <li class="item-wrap" v-for="j in i.items" :key="j.id">
            <img class="avatar" v-lazy="j.avatar" alt="" width="50" height="50" />
            <p class="name">{{j.name}}</p>
          </li>
        </ul>
      </ul>
    </scroll>
    <div class="list">
      <ul class="list-wrap">
        <li v-show="i.items.length>0" class="item" :class="{'active': current === index}" @touchmove.stop.prevent="touchMove($event, index)" @touchstart="select($event, index)" v-for="(i, index) in data" :key="i.id">{{i.title.substr(0, 1)}}</li>
      </ul>
    </div>
    <div class="current">
      <p class="current-text"></p>
    </div>
  </div>
</template>
<script>
import Scroll from 'containers/Scroll'
const ANCHOOR_HEIGHT = 18
export default {
  name: 'listView',
  data() {
    return {
      current: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  created() {
    this.touch = {}
  },
  methods: {
    select(e, index) {
      this.current = index
      this.touch.y = e.touches[0].pageY
      this.touch.index = index
      this.$refs.scrollWrap.scrollToElement(this.$refs.scrollItem[index], 0)
    },
    touchMove(e, index) {
      // 偏移数
      let num = (e.touches[0].pageY - this.touch.y) / ANCHOOR_HEIGHT | 0
      let currentIndex = this.touch.index + num
      this.$refs.scrollWrap.scrollToElement(this.$refs.scrollItem[currentIndex], 0)
      this.current = currentIndex
    }
  },
  components: {
    Scroll
  },
  watch: {
    data() {
      this.$refs.scrollWrap.refresh()
      this.$refs.scrollWrap.onScroll()
    }
  }
}
</script>
<style lang="less" scoped>
.list-view {
  position: fixed;
  top: 88px;
  bottom: 0px;
  right: 0;
  left: 0;
  overflow: hidden;
  .scoroll-wrapper {
    height: 100%;
    .singer-wrap {
      .item {
        margin-bottom: 5px;
        .title {
          height: 30px;
          line-height: 30px;
          padding-left: 20px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          background: #333;
        }
        .item-wrap {
          display: flex;
          padding: 20px 0 0 30px;
          align-items: center;
          .avatar {
            border-radius: 50%;
          }
          .name {
            margin-left: 20px;
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
          }
        }
      }
    }
    .current {
      position: relative;
      width: 100%;
      .current-text {
        position: absolute;
        width: 100%;
        z-index: 2;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: rgba(255, 255, 255, .5);
        background: #333;
        top: -1px;
      }
    }
  }
  .list {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(0, 0, 0, .3);
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: hsla(0, 0%, 100%, .5);
      font-size: 12px;
      &.active {
        color: #ffcd32;
      }
    }
  }
}
</style>
