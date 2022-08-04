<template>
    <div>
        <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft">
            <template #right>
                <van-icon name="search" size="22" color="black" />
            </template>
            <template #left> <!-- 在{{}} 可以省略this 他可以自动访问this属性 -->
                {{$store.state.cityName}}<van-icon name="arrow-down" color="black" />
            </template>
        </van-nav-bar>
        <div
            class="box"
            :style="{
                height: height,
            }"
        >
            <ul>
                <li v-for="data in cinemaList" :key="data.cinemaId">
                    <div class="left">
                        <div class="name">{{ data.name }}</div>
                        <span class="address">{{ data.address }}</span>
                    </div>
                    <div>
                        <div style="color: red; font-size: 12px">
                            ￥{{ data.lowPrice / 100 }}起
                        </div>
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
            cinemaList: [],
            height: '0px'
        }
    },
    mounted () {
    // 动态结算高度
        this.height =
            document.documentElement.clientHeight -
            document.querySelector('footer').offsetHeight -
            this.$refs.navbar.$el.offsetHeight +
            'px'
        http.http({
            url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=1348166`,
            headers: {
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res) => {
            this.cinemaList = res.data.data.cinemas
            // 上树之后
            this.$nextTick(() => {
                new BetterScroll('.box', {
                    scrollbar: {
                        fade: true
                    }
                })
            })
        })
    },
    methods: {
        handleLeft () {
            this.$router.push('/city')
        }
    }
}
</script>
<style lang="scss" scoped>
li {
    display: flex;
    justify-content: space-between;
    padding: 0.8333rem;
    .name {
        font-size: 15px;
        color: #191a1b;
    }
}
.left {
    width: 13.8889rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.address {
    font-size: 12px;
    margin-top: 5px;
    color: #797d82;
}
.box {
    // height:34.3333rem;
    overflow: hidden;
    position: relative;
    // 修正滚动调的位置
}
</style>
