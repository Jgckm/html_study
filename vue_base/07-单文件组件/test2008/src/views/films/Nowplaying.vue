<template>
    <div>
        <ul>
            <li @click="handleChangePage(data.filmId)" v-for="data in datalist" :key="data.filmId">
              <img :src="data.poster" alt="">
                <div >
                  <div class="title">{{data.name}}</div>
                  <div :class="data.grade ? '':'hidden'">观众评 <span>{{data.grade}}</span></div>
                  <div class="actors">主演:{{data.actors | actorsFilter}}</div>
                  <div>{{data.nation}} | {{data.runtime}}分钟</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import http from '@/util/http'

Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '暂无主演'
  return data.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2546257',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
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
  ul {
    li{
      padding: .5556rem;
      height: 5.5556rem;
      img{
        float: left;
        width: 3.6667rem;
      }
      &>div{
        margin: .3333rem 0;
        margin-left: 4.1667rem;
      }
      div{
        color: #666;
        font-size: 13px;
        span{
          color: red;
          font-weight: 900;
          font-size: 14px;
        }
      }
      .title{
        color: #333;
        font-size: 18px;
      }
      .actors{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 11.1111rem;
      }
    }
  }
  .hidden{
    visibility: hidden;
  }
</style>
