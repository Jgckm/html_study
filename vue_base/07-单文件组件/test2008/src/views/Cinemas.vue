<template>
    <div>
        <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
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
            <cinemas-data-item></cinemas-data-item>
        </div>
    </div>
</template>
<script>
import cinemasDataItem from '@/mycomponents/cinemas/cinemasDataItem'
import BetterScroll from 'better-scroll'

export default {
    components: {
        cinemasDataItem
    },
    data () {
        return {
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

        // 分发 action
        if (this.$store.state.cinemasList.length === 0) {
            this.$store.dispatch('getCinemasData', this.$store.state.cityId).then(res => {
                this.$nextTick(() => {
                    new BetterScroll('.box', {
                        scrollbar: {
                            fade: true
                        }
                    })
                })
            })
        } else {
            this.$nextTick(() => {
                new BetterScroll('.box', {
                    scrollbar: {
                        fade: true
                    }
                })
            })
        }
        // http.http({
        //     url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=1348166`,
        //     headers: {
        //         'X-Host': 'mall.film-ticket.cinema.list'
        //     }
        // }).then((res) => {
        //     this.cinemaList = res.data.data.cinemas
        //     // 上树之后
        //     this.$nextTick(() => {
        //         new BetterScroll('.box', {
        //             scrollbar: {
        //                 fade: true
        //             }
        //         })
        //     })
        // })
    },
    methods: {
        handleLeft () {
            this.$router.push('/city')
        },
        handleRight () {
            this.$router.push('/cinemas/search')
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
