<template>
  <div>
    <div class="search">
      <div class="search-box-wrap">
        <search-box ref="search" @query="query"></search-box>
      </div>
      <div class="suggest-wrap" v-show="queryData">
        <Suggest :query="queryData" @select="saveSearch" @listScroll="blurInput" />
      </div>
      <div class="hot-search-wrap" v-show="!queryData">
        <p class="title">热门搜索</p>
        <ul class="hot-key">
          <li @click="addQuery(i.k)" class="item" v-for="i in hotkey" :key="i.id">{{i.k}}</li>
        </ul>
        <div class="search-history" v-show="searchHistory.length">
          <h1 class="title">
            <span class="text">搜索历史</span>
            <span class="clear">
              <i class="icon-clear" @click="clearAll"></i>
            </span>
          </h1>
          <search-list :searches="searchHistory" @select="addQuery" @delete="deleteItem"></search-list>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import SearchBox from 'containers/SearchBox'
import SearchList from 'containers/SearchList'
import Suggest from 'containers/Suggest'
import { getHotKey } from 'api/search'
import { ERR_OK } from 'api/config'
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    ...mapActions({
      setSearchHistory: 'saveSearchHistory',
      deleteSearchHistory: 'deleteSearchHistory',
      clearSearchHistory: 'clearSearchHistory'
    }),
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
    },
    blurInput() {
      this.$refs.search.blur()
    },
    saveSearch() {
      this.setSearchHistory(this.queryData)
    },
    deleteItem(item) {
      this.deleteSearchHistory(item)
    },
    clearAll() {
      this.clearSearchHistory()
    }
  },
  components: {
    SearchBox,
    Suggest,
    SearchList
  }
}
</script>
<style lang="less" scoped>
@import '~common/less/const.less';
.search {
	overflow: hidden;
	top: @marin-top-size;
	left: 0;
	bottom: 0;
	right: 0;
	position: fixed;
	.hot-search-wrap {
		margin: 30px 10px;
		.title {
			color: rgba(0, 0, 0, 0.6);
			font-size: @font-size-medium;
		}
		.hot-key {
			display: flex;
			flex-wrap: wrap;
			.item {
				font-size: @font-size-medium;
				padding: 10px;
				margin: 10px;
				background: white;
				border-radius: 5px;
			}
		}
	}
	.search-history {
		position: relative;
		margin: 20px;
		.title {
			display: flex;
			align-items: center;
			height: 40px;
			font-size: @font-size-medium;
			color: #000;
			.text {
				flex: 1;
			}
			.clear {
				.icon-clear {
					font-size: @font-size-medium;
					color: @color-text-d;
				}
			}
		}
	}
}
</style>
