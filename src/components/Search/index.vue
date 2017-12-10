<template>
 <div class="search">
  <div class="search-box-wrap">
   <search-box ref="search" @query="query"></search-box>
  </div>
  <div class="suggest-wrap" v-show="queryData">
   <Suggest :query="queryData" @select=""/>
  </div>
  <div class="hot-search-wrap" v-show="!queryData">
   <p class="title">热门搜索</p>
   <ul class="hot-key">
    <li @click="addQuery(i.k)" class="item" v-for="i in hotkey" :key="i.id">{{i.k}}</li>
   </ul>
  </div>
 </div>
</template>
<script>
import SearchBox from 'containers/SearchBox'
import Suggest from 'containers/Suggest'
import { getHotKey } from 'api/search'
import { ERR_OK } from 'api/config'
export default {
  name: 'search',
  data() {
    return {
      hotkey: [],
      queryData: ''
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
    },
    query(query) {
      this.queryData = query
    }
  },
  components: {
    SearchBox,
    Suggest
  }
}
</script>
<style lang="less" scoped>
.search {
	position: fixed;
	overflow: hidden;
	top: 59px;
	left: 0;
	right: 0;
	bottom: 0;
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
