<template>
	<Scroll :data="result" class="suggest-wrap" ref="scrollWrap" :pullUp="pullUp" @scrollToEnd="searchMoreData">
		<ul class="suggest-list">
			<li @click="selectItem(item)" class="suggest-item" v-for="item in result" :key="item.id">
				<div class="icon">
					<i :class="getIconCls(item)"></i>
				</div>
				<div class="name">
					<p class="text" v-html="getDisplayName(item)"></p>
				</div>
			</li>
			<li class="result" v-show="!result.length && !loading">无结果</li>
			<li class="loading-wrap">
				<Loading :show="loadMore" :title="`加载更多`"/>
			</li>
		</ul>
	</Scroll>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { search } from 'api/search'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
import Singer from 'common/js/singer'
import Scroll from 'containers/Scroll'
import { playlistMixin } from 'common/js/mixin'
import Loading from 'containers/Loading'
const TYPE_SINGER = 'singer'

export default {
	mixins: [playlistMixin],
	data() {
		return {
			page: 1,
			perpage: 10,
			result: [],
			loading: false,
			pullUp: true,
			loadMore: true,
			loadEnd: true
		}
	},
	props: {
		query: {
			type: String,
			default: ''
		},
		showSinger: {
			type: Boolean,
			default: true
		}
	},
	watch: {
		query(val) {
			this.resetQuery()
			!val ? '' : this.search()
		}
	},
	methods: {
		...mapMutations({
			setSinger: 'SET_SINGER'
		}),
		...mapActions([
			'insertSong'
		]),
		search() {
			this.loading = true
			this.loadMore = false
			search(this.query, this.page, this.showSinger, this.perpage).then((res) => {
				if (res.code === ERR_OK) {
					this.loading = false
					if (!this.sloveResult(res.data).length) {
						this.loadEnd = false
					}
					this.result = [...this.result, ...this.sloveResult(res.data)]
					this.loadMore = true
					this.page++
				}
			})
		},
		searchMoreData() {
			if (this.loadMore && this.loadEnd) {
				this.search()
			}
		},
		resetQuery() {
			this.result = []
			this.page = 1
		},
		sloveResult(data) {
			let ret = []
			if (data.zhida && data.zhida.singerid) {
				ret.push({ ...data.zhida, ...{ type: TYPE_SINGER } })
			}
			if (data.song) {
				ret = ret.concat(this._normalizeSongs(data.song.list))
			}
			return ret
		},
		_normalizeSongs(list) {
			let ret = []
			list.forEach((musicData) => {
				if (musicData.songid && musicData.albummid) {
					ret.push(createSong(musicData))
				}
			})
			return ret
		},
		getIconCls(item) {
			if (item.type === TYPE_SINGER) {
				return 'icon-mine'
			} else {
				return 'icon-music'
			}
		},
		getDisplayName(item) {
			if (item.type === TYPE_SINGER) {
				return item.singername
			} else {
				return `${item.name}-${(item.singer)}`
			}
		},
		selectItem(item) {
			if (item.type === TYPE_SINGER) {
				const singer = new Singer({
					id: item.singermid,
					name: item.singername
				})
				this.setSinger(singer)
				this.$router.push({
					path: `/search/${singer.id}`
				})
			} else {
				this.insertSong(item)
			}
			this.$emit('select', item)
		},
		handlePlayList(playList) {
			const bottom = playList.length > 0 ? '60px' : ''
			this.$refs.scrollWrap.$el.style.bottom = bottom
			this.$refs.scrollWrap.refresh()
		}
	},
	computed: {},
	components: {
		Scroll,
		Loading
	}
}
</script>

<style lang="less" scoped>
@import '~@/common/less/const.less';
@import '~@/common/less/mymixin.less';
.suggest-wrap {
	position: fixed;
	overflow: hidden;
	top: 100px;
	left: 0;
	right: 0;
	bottom: 0;
	.suggest-list {
		overflow: hidden;
		padding: 0 20px;
		.suggest-item {
			display: flex;
			align-items: center;
			padding: 20px 0;
		}
		.icon {
			flex: 0 0 30px;
			width: 30px;
			[class^='icon-'] {
				font-size: 14px;
				color: @color-text-d;
			}
		}
		.name {
			flex: 1;
			font-size: @font-size-medium;
			color: @color-text-d;
			overflow: hidden;
		}
		.result {
			text-align: center;
			padding: 20px;
		}
	}
	.no-result-wrapper {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>
