<template>
 <div class="loading" v-show="show">
  <div class="loading-wrap">
   <img src="./img/loading.gif" alt="" height="30px;">
   <div class="info">{{title}}</div>
  </div>
 </div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    show: {
      type: Boolean,
      default: true
		},
		title: {
			type:String,
			default: `玩命加载中...`
		}
  }
}
</script>
<style lang="less" scoped>
.loading {
	margin: 10px;
	.loading-wrap {
		width: 100%;
		text-align: center;
		.info {
			font-size: 12px;
		}
	}
}
</style>
