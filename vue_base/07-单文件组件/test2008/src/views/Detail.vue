<template>
  <div v-if="filmInfo">
    <!-- <img :src="filmInfo.poster" alt=""> -->
    <div
      class="poster"
      :style="{ backgroundImage: `url(${filmInfo.poster})` }"
    ></div>
    <div class="content">
      <div class="name">
        {{ filmInfo.name}}
        <span style="float: right; color: #ffb232;font-size:8px">
          <i style="font-size: 18px">{{ filmInfo.grade }}</i>分
        </span>
      </div>
      <div>
        <div class="detail-text">{{ filmInfo.category }}</div>
        <div class="detail-text">
          {{ filmInfo.premiereAt | dataFilter }}上映
        </div>
        <div class="detail-text">
          {{ filmInfo.nation }} |
          {{ filmInfo.runtime === 0 ? "未知" : filmInfo.runtime }}
        </div>
        <div @click="hidden = !hidden" class="des" :class="hidden ? 'hidden' : ''">
          {{ filmInfo.synopsis }}
        </div>
        <div @click="hidden = !hidden" style="text-align: center">
          <i
            class="fa"
            aria-hidden="true"
            :class="hidden ? 'fa-angle-down' : 'fa-angle-up'"
          ></i>
        </div>
      </div>
      <!-- 演职人员 -->
      <div>
        <div class="actor-title">演职人员</div>
        <detail-swiper :perview="3.5" name="actors">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.actors"
            :key="index"
          >
            <div
              class="actor-img"
              :style="'backgroundImage: url(' + data.avatarAddress + ')'"
            ></div>
            <div
              style="
                width: 4.7222rem;
                text-align: center;
                font-size: 10px;
                color: #191a1b;
              "
            >
              {{ data.name }}
            </div>
            <div
              style="
                width: 4.7222rem;
                text-align: center;
                font-size: 12px;
                color: #797d82;
              "
            >
              {{ data.role }}
            </div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
      <!-- 剧照 -->
      <div>
        <div class="actor-title">剧照</div>
        <detail-swiper :perview="2.5" name="photos">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.photos"
            :key="index"
          >
            <div
              class="photo"
              :style="'backgroundImage: url(' + data + ')'"
            ></div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import momnet from 'moment' // 设置中文
import Vue from 'vue'
import detailSwiper from '@/mycomponents/detail/DetailSwiper'
import detailSwiperItem from '@/mycomponents/detail/DetailSwiperItem'

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

    http
      .http({
        url: `/gateway?filmId=${this.$route.params.id}&k=2867809`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info'
        }
      })
      .then((res) => {
        console.log(res.data)
        this.filmInfo = res.data.film
      })
  },
  mounted () {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 50) {
        console.log(22)
      }
    }
  },
  destroyed () {
    // 清空监听
    window.onscroll = null
  },
  components: {
    detailSwiper,
    detailSwiperItem
  }
}
</script>
<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 10.6667rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0.8333rem;
  overflow: hidden;
  .detail-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 0.2222rem;
  }
}
.name {
  font-size: 18px;
}
.des {
  margin-top: 0.2778rem;
  font-size: 12px;
  color: #797d82;
}
.hidden {
  height: 1.6667rem;
  overflow: hidden;
}
.actor-img {
  width: 4.7222rem;
  height: 4.7222rem;
  background-size: cover;
  background-position: center;
}
.actor-title {
  margin-bottom: 0.5556rem;
}
.photo {
  width: 8.3333rem;
  height: 5.5556rem;
  background-size: cover;
  background-position: center;
}
</style>
