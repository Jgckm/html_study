<template>
  <div v-if="filmInfo">
    <!-- <img :src="filmInfo.poster" alt=""> -->
    <div class="poster" :style="{backgroundImage:`url(${filmInfo.poster})`}"></div>
    <div class="content">
      <div class="name">{{filmInfo.name}}</div>
      <div>
        <div class="detail-text">{{filmInfo.category}}</div>
        <div class="detail-text">{{filmInfo.premiereAt | dataFilter}}上映</div>
        <div class="detail-text">{{filmInfo.nation}} | {{filmInfo.runtime===0 ? '未知':filmInfo.runtime}}</div>
        <div class="des" :class="hidden ?'hidden':''">{{filmInfo.synopsis}}</div>
        <div @click="hidden = !hidden" style="text-align:center"><i class="fa" aria-hidden="true" :class="hidden ? 'fa-angle-down':'fa-angle-up'"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import momnet from 'moment' // 设置中文
import Vue from 'vue'

momnet.locale('zh-cn')
Vue.filter('dataFilter', (data) => {
  return momnet(data * 1000).format('YYYY-MM-DD')
})
export default {
  data () {
    return {
      filmInfo: null,
      hidden: true
    }
  },
  created () {
    // 当前匹配的路由
    console.log('created', this.$route.params.id)
    this.moiveId = this.$route.params.id
  },
  mounted () {
    http.http({
      url: `/gateway?filmId=${this.$route.params.id}&k=2867809`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(
      (res) => {
        console.log(res.data)
        this.filmInfo = res.data.film
      }
    )
  }
}
</script>
<style lang="scss" scoped>
.poster{
  width:100%;
  height: 10.6667rem;
  background-position: center;
  background-size: cover;
}
.content{
  padding: .8333rem;
  .detail-text{
    font-size: 13px;
    color: #797d82;
    margin-top: .2222rem;
  }
}
.name{
  font-size: 18px;
}
.des{
  margin-top: .2778rem;
  font-size: 12px;
  color:#797d82;
}
.hidden{
   height:1.6667rem;
   overflow: hidden;
}

</style>
