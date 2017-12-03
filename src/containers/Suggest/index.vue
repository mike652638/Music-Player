<template>
 <my-scroll class="suggest-list" ref="scrollRef">
  <ul class="suggest-list">
   <li class="suggest-item">
    <div class="icon">
     <i></i>
    </div>
    <div class="name">
     <p class="text"></p>
    </div>
   </li>
  </ul>
 </my-scroll>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {}
  },
  props: {
  },
  watch: {
  },
  filters: {},
  methods: {
  },
  computed: {},
  created() { },
  mounted() { },
  destroyed() { }
}
</script>

<style lang="less" scoped>
@import '~@/common/less/const.less';
@import '~@/common/less/mymixin.less';

.suggest-list {
	height: 100%;
	overflow: hidden;
	.suggest-list {
		padding: 0 30px;
		.suggest-item {
			display: flex;
			align-items: center;
			padding-bottom: 20px;
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
	}
	.no-result-wrapper {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>
