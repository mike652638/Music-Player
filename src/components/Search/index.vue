<template>
 <div class="search">
  <div class="search-box-wrap">
   <search-box ref="search"></search-box>
  </div>
  <div class="hot-search-wrap">
   <p class="title">热门搜索</p>
   <ul class="hot-key">
     <li @click="addQuery(i.k)" class="item" v-for="i in hotkey" :key="i.id">{{i.k}}</li>
   </ul>
  </div>
 </div>
</template>
<script>
import SearchBox from 'containers/SearchBox'
import { getHotKey } from 'api/search'
import { ERR_OK } from 'api/config'
export default {
  name: 'search',
  data() {
    return {
      hotkey: []
    }
  },
  created() {
    this._getHotKey()
  },
  methods: {
    _getHotKey() {
      getHotKey().then((res) => {
        if (res.code === ERR_OK) {
          this.hotkey = res.data.hotkey.slice(0, 10)
        }
      })
    },
    addQuery(query) {
      this.$refs.search.setQuery(query)
    }
  },
  components: {
    SearchBox
  }
}
</script>
<style lang="less" scoped>
.search {
	.hot-search-wrap {
		margin: 10px;
		.title {
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
    }
    .hot-key {
      .item {
        font-size: 12px;
        display: inline-block;
        padding: 5px;
        margin: 5px;
        background: white;
        border-radius: 5px;
      }
    }
	}
}
</style>
