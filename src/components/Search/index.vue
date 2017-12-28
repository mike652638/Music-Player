<template>
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
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import SearchBox from 'containers/SearchBox'
  import Suggest from 'containers/Suggest'
  import { getHotKey } from 'api/search'
  import { ERR_OK } from 'api/config'
  import { mapActions } from 'vuex'
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
      ...mapActions({
        setSearchHistory: 'saveSearchHistory'
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
      }
    },
    components: {
      SearchBox,
      Suggest
    }
  }
</script>
<style lang="less" scoped>
  @import '~common/less/const.less';
  .search {
  	overflow: hidden;
  	top: @marin-top-size;/*no*/
  	left: 0;
  	bottom: 0;
  	right: 0;
  	position: fixed;
  	.hot-search-wrap {
  		margin: 10px;
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
  }
</style>
