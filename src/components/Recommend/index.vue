<template>
  <div class="recommend">
    <div class="slider-wrap" v-if="picData.length">
      <slider>
        <div class="pic-list" v-for="i in picData" :key="i.id">
          <a :href="i.linkUrl">
            <img :src="i.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>
<script>
import { getRecommend } from 'api/recommend'
import * as config from 'api/config'
import Slider from 'containers/Slider'
export default {
  name: 'recommend',
  data () {
    return {
      picData: []
    }
  },
  created() {
    this._getRecommendPic()
  },
  methods: {
    _getRecommendPic() {
      getRecommend(config.recommendUrl, config.commonParam, config.options).then((res) => {
        if (res.code === config.ERR_OK) {
          this.picData = res.data.slider
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>
<style lang="less" scoped>

</style>
