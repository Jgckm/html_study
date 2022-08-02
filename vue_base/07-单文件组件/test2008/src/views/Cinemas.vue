<template>
    <div>
        <div class="box">
            <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
            <div class="left">
                 <div class="name">{{data.name}}</div>
                    <span class="address">{{data.address}}</span>
            </div>
          <div>
            <div style="color:red;font-size:12px">￥{{data.lowPrice/100}}起</div>
          </div>
        </li>
    </ul>
        </div>
    </div>
</template>
<script>
import http from '@/util/http'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemaList: []
    }
  },
  mounted () {
    http.http({
      url: '/gateway?cityId=310100&ticketFlag=1&k=1348166',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.cinemas

      this.$nextTick(() => {
        new BetterScroll('.box')
      })
    })
  }
}
</script>
<style lang="scss" scoped>
    li{
        display: flex;
        justify-content: space-between;
        padding: .8333rem;
        .name{
            font-size: 15px;
            color: #191a1b;
        }
    }
    .left{
        width: 13.8889rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .address{
        font-size: 12px;
        margin-top: 5px;
        color: #797d82;
    }
    .box{
        height:300px;
        overflow: hidden;
    }
</style>
