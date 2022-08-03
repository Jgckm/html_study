<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
      :immediate-check='false'
    >
      <van-cell
        @click="handleChangePage(data.filmId)"
        v-for="data in datalist"
        :key="data.filmId"
      >
        <img :src="data.poster" alt="" v-lazy="data.poster"/>
        <div class="info">
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
import { Lazyload } from 'vant'

Vue.use(Lazyload)

Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '暂无主演'
  return data.map((item) => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0
    }
  },
  mounted () {
    http
      .http({
        url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=2546257',
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
      .then((res) => {
        console.log(res.data)
        this.datalist = res.data.data.films
        this.total = res.data.data.total
      })
  },
  methods: {
    onLoad () {
      // 总长度匹配，禁用懒加载
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }
      console.log('到底了')
      this.current++
      http
        .http({
          url: `/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=2546257`,
          headers: {
            'X-Host': 'mall.film-ticket.film.list'
          }
        })
        .then((res) => {
          // console.log(res.data)
          this.datalist = [...this.datalist, ...res.data.data.films]
          this.loading = false
        })
    },
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
    display: flex;
    padding: 0.5556rem;
    height: 6.9444rem;
    img{
      float: left;
      width: 3.6667rem;
      height: auto;
    }
    .info {
      float: left;
      margin-left: .8333rem;
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
