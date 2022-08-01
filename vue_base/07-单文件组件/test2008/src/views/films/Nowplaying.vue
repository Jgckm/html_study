<template>
    <div>
        <ul>
            <li @click="handleChangePage(data.videoId)" v-for="data in datalist" :key="data.videoId">
              <img :src="data.img" alt="">
                <div >
                  <div class="title">{{data.nm}}</div>
                  <div>观众评 <span>{{data.mk}}</span></div>
                  <div class="actors">主演:{{data.desc}}</div>
                  <div>{{data.showInfo}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: ['1111', '2222', '223333']
    }
  },
  mounted () {
    axios.get('/maoyan/api/mmdb/movie/v3/list/hot.json?&ci=119&channelId=4').then(res => {
      this.datalist = res.data.data.hot
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
        margin-left: 3.8889rem;
      }
      div{
        color: #666;
        font-size: 12px;
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
</style>
