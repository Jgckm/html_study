<template>
    <van-index-bar :index-list="computedList" @select="handleChange">
        <div v-for="data in cityList" :key="data.tpye">
            <van-index-anchor :index="data.type" />
            <van-cell
                @click="handleClick(item)"
                :title="item.name"
                v-for="item in data.list"
                :key="item.cityId"
            />
        </div>
    </van-index-bar>
</template>
<script>
import http from '@/util/http'
import { Toast } from 'vant'
export default {
    data () {
        return {
            cityList: []
        }
    },
    computed: {
        computedList () {
            return this.cityList.map((item) => item.type)
        }
    },
    mounted () {
        http.http({
            url: '/gateway?k=9453306',
            headers: {
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then((res) => {
            //   console.log(res.data.data.cities)
            this.cityList = this.renderCity(res.data.data.cities)
            // 1. 316条 数据 A ,B 进行分组
            // 2. 利用转换后的数组，结合组件库进行渲染界面
        })
    },
    methods: {
        renderCity (list) {
            const dataList = []
            // 生成26个字母
            const letterList = [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z'
            ]
            //   for (let i = 65; i < 91; i++) {
            //     letterList.push(String.fromCharCode(i))
            //   }
            //   console.log(letterList)

            letterList.forEach((letter) => {
                const citys = list.filter(
                    (item) =>
                        item.pinyin.substring(0, 1).toUpperCase() === letter
                )
                citys.length > 0 &&
                    dataList.push({ type: letter, list: citys })
            })
            return dataList
        },
        handleChange (index) {
            Toast({
                message: index
            })
            //   console.log(index)
        },
        handleClick (item) {
            //   console.log(item.name, item.cityId)
            // 传统多页面 处理方式
            // location.href = '#/ciemas?city=?cityname=?'
            // cookie , localStorage

            //  单页面方案
            // 1.中间人 模式
            // 2. bus 事件总线 $on , $emit

            // vuex状态管理模式
            // this.$store.state.cityId = item.cityId
            // this.$store.state.cityName = item.name // 这样写无法跟踪
            this.$router.push('/cinemas')
        }
    }
}
</script>
<style lang="scss" >
.van-toast--html,
.van-toast--text {
    min-width: 30px;
}
</style>
