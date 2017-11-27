<template>
 <div class="song-list">
  <ul class="songs-wrap">
   <li @click="selectItem(i, index)" v-for="(i, index) in songs" :key="i.id" class="item">
    <div class="content">
     <p class="name">{{i.musicData.songname}}</p>
     <p class="desc">{{i.musicData.singer[0].name}} - {{i.musicData.albumname}}</p>
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
    }
  },
  methods: {
    selectItem(i, index) {
      this.$emit('select', i, index)
    }
  },
  components: {
    Loading
  }
};
</script>
<style lang="less" scoped>
.song-list {
	padding: 20px 30px;
	.item {
		height: 64px;
		font-size: 14px;
		.content {
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				color: #fff;
			}
			.desc {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				margin-top: 4px;
				color: hsla(0, 0%, 100%, 0.3);
			}
		}
	}
}
</style>
