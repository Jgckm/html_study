<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"

    >
      <van-cell
        @click="handleChangePage(data.filmId)"
        v-for="data in datalist"
        :key="data.filmId"
      >
        <img :src="data.poster" alt="" />
        <div>
          <div class="title">{{ data.name }}</div>
          <div :class="data.grade ? '' : 'hidden'">
            观众评 <span>{{ data.grade }}</span>
          </div>
          <div class="actors">主演:{{ data.actors | actorsFilter }}</div>
          <div>{{ data.nation }} | {{ data.runtime }}分钟</div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import Vue from 'vue'
import http from '@/util/http'

Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '暂无主演'
  return data.map((item) => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false
    }
  },
  mounted () {
    http
      .http({
        url: '/gateway?cityId=110100&pageNum=5&pageSize=10&type=1&k=2546257',
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
      .then((res) => {
        console.log(res.data)
        this.datalist = res.data.films
      })
  },
  methods: {
    handleChangePage (id) {
      // 编程式导航
      //   location.href = `#/detail/${id}`
      // 1-通过路径跳转
      //   this.$router.push(`/detail/${id}`)
      // 2- 通过命名路由跳转
      this.$router.push({
        name: 'jgckMDetail',
        // 因为是动态路径所以需要 params 传递参数
        params: {
          id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.van-list {
  .van-cell {
    padding: 0.5556rem;
    height: 5.5556rem;
    & > div {
      margin: 0.3333rem 0;
      img {
        float: left;
        width: 3.6667rem;
      }
    }
    div {
      color: #666;
      font-size: 13px;
      span {
        color: red;
        font-weight: 900;
        font-size: 14px;
      }
    }
    .title {
      color: #333;
      font-size: 18px;
    }
    .actors {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 11.1111rem;
    }
  }
}
.hidden {
  visibility: hidden;
}
</style>
