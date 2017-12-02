<template>
 <div class="rank" ref="rankRef">
  <scroll :data="toplist" class="toplist" ref="scroll">
   <ul>
    <li class="item" v-for="item in toplist" @click="selectItem(item)" :key="item.id">
     <div class="icon">
      <img width="100" height="100" v-lazy="item.picUrl" @load="loadImg">
     </div>
     <ul class="songlist">
      <li class="song" v-for="(song, index) in item.songList" :key="song.id">
       <span>{{ index + 1 }}</span>
       <span>{{ song.songname }}</span>
       <span class="singername"> - {{ song.singername }}</span>
      </li>
     </ul>
    </li>
   </ul>
  </scroll>
  <loading :show="!toplist.length" />
  <router-view></router-view>
 </div>
</template>

<script>
import { getTopList } from 'api/rank'
import Loading from 'containers/Loading'
import Scroll from 'containers/Scroll'
import { ERR_OK } from 'api/config'
import { playlistMixin } from 'common/js/mixin'
import { mapMutations } from 'vuex'

export default {
  mixins: [playlistMixin],
  components: {
    Scroll,
    Loading
  },
  data() {
    return {
      toplist: []
    }
  },
  methods: {
    _getTopList() {
      getTopList().then((res) => {
        if (res.code === ERR_OK) {
          this.toplist = res.data.topList
        }
      })
    },
    loadImg() {
    },
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? '60px' : ''
      this.$refs.rankRef.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    selectItem(item) {
      this.$router.push(`/rank/${item.id}`)
      this.setTopList(item)
    },
    ...mapMutations({
      setTopList: 'SET_TOP_LIST'
    })
  },
  created() {
    this._getTopList()
  }
}
</script>

<style lang="less" scoped>
@import '~common/less/const.less';
@import '~common/less/mymixin.less';

.rank {
	position: fixed;
	width: 100%;
	top: 70px;
	bottom: 0;
	.toplist {
		height: 100%;
		overflow: hidden;
		.item {
			display: flex;
			margin: 0 20px;
			padding-top: 20px;
			height: 100px;
			&:last-child {
				padding-bottom: 20px;
			}
			&:first-child {
				padding-top: 0px;
			}
			.icon {
				flex: 0 0 100px;
				width: 100px;
				height: 100px;
			}
			.songlist {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 0 20px;
				height: 100px;
				overflow: hidden;
				background: @color-highlight-background;
				color: @color-text-d;
				font-size: @font-size-small;
				.song {
					line-height: 26px;
					.singername {
						color: rgba(255, 255, 255, 0.2);
					}
				}
			}
		}
		.loading-container {
			position: absolute;
			width: 100%;
			top: 50%;
			transform: translateY(-50%);
		}
	}
}
</style>
