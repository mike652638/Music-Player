<template>
  <div class="singer">
    <scroll class="scoroll-wrapper" :data="singerList">
      <ul class="singer-wrap">
        <ul class="item" v-for="i in singerList" :key="i.id">
          <h2 class="title">{{i.title}}</h2>
          <li class="item-wrap" v-for="j in i.items" :key="j.id">
            <img class="avatar" v-lazy="j.avatar" alt="" width="50" height="50" />
            <p class="name">{{j.name}}</p>
          </li>
        </ul>
      </ul>
    </scroll>
    <loading :show="!singerList.length"/>
  </div>
</template>
<script>
import { getSingerList } from 'api/singer'
import * as config from 'api/config'
import Scroll from 'containers/Scroll'
import Loading from 'containers/Loading'
const HOT_NAME = '热门'
const HOT_LENGTH = 10
export default {
  name: 'singer',
  data() {
    return {
      singerList: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList(config.singerListUrl, config.singerListParam, config.singetListOpts).then((res) => {
        if (res.code === config.ERR_OK) {
          this.singerList = this._normalizeSingerData(res.data.list)
        }
      })
    },
    _normalizeSingerData(data) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      data.map((el, index) => {
        if (index < HOT_LENGTH) {
          let singerInfo = {
            id: el.Fsinger_id,
            name: el.Fsinger_name,
            avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${el.Fsinger_mid}.jpg?max_age=2592000`
          }
          map.hot.items.push(singerInfo)
        }
        let key = el.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        } else {
          let singerInfo = {
            id: el.Fsinger_id,
            name: el.Fsinger_name,
            avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${el.Fsinger_mid}.jpg?max_age=2592000`
          }
          map[key].items.push(singerInfo)
        }
      })
      let hot = []
      let ret = []
      for (let key in map) {
        if (map[key].title === HOT_NAME) {
          hot.push(map[key])
        } else {
          ret.push(map[key])
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>
<style lang="less" scoped>
.singer,
.scoroll-wrapper {
  position: fixed;
  top: 88px;
  bottom: 0px;
  right: 0;
  left: 0;
  overflow: hidden;
  .singer-wrap {
    .item {
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
}
</style>
