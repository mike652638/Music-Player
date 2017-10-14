<template>
  <div>
    推荐</div>
</template>
<script>
import { getRecommend } from 'api/recommend'
import * as config from 'api/config'
export default {
  name: 'recommend',
  data () {
    return {
      picList: {}
    }
  },
  created() {
    this.getRecommendPic()
  },
  methods: {
    getRecommendPic() {
      getRecommend(config.recommendUrl, config.commonParam, config.options).then((res) => {
        if (res.code === config.ERR_OK) {
          Object.assign(this.picList, res)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
