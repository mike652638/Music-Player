<template>
	<div class="song-list">
		<ul class="songs-wrap">
			<li v-show="!songs.length" class="item" style="text-align: center; color: #000;">空空如也</li>
			<li @click="selectItem(i, index)" v-for="(i, index) in songs" :key="i.id" class="item" :class="{'rank-wrap': rank}">
				<div class="rank" :class="getRank(index)" v-show="rank">
					<span class="icon">{{index + 1}}</span>
				</div>
				<div class="content">
					<p class="name">{{i.name}}</p>
					<p class="desc">{{i.singer}} - {{i.album}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import Loading from "containers/Loading";
import { mapMutations } from "vuex";
export default {
	name: "SongList",
	props: {
		songs: {
			type: Array,
			default: function () {
				return [];
			}
		},
		rank: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		selectItem(i, index) {
			this.$emit('select', i, index)
		},
		getRank(index) {
			switch (+index) {
				case 0:
					return `rank-1`
					break
				case 1:
					return `rank-2`
					break
				case 2:
					return `rank-3`
					break
				default:
					return ``
			}
		}
	},
	components: {
		Loading
	}
};
</script>
<style lang="less" scoped>
@import '~common/less/mymixin.less';
.song-list {
	padding: 20px 30px;
	.item {
		height: 64px;
		font-size: 14px;
		&.rank-wrap {
			display: flex;
			align-items: center;
			.content {
				flex: 1;
			}
			.rank {
				text-align: center;
				width: 30px;
				height: 30px;
				color: #ff400b;
				font-size: 18px;
				margin-right: 30px;
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center center;
				&.rank-1 {
					.bg-image('./first');
					color: #ffcd32;
				}
				&.rank-2 {
					.bg-image('./second');
					color: #ffcd32;
				}
				&.rank-3 {
					.bg-image('./third');
					color: #ffcd32;
				}
			}
		}
		.content {
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				color: #000;
				font-size: 16px;
			}
			.desc {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				margin-top: 4px;
				color: grey;
			}
		}
	}
}
</style>
