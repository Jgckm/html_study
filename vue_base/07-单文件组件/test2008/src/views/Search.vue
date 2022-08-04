<template>
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            :autofocus='true'
        />
       <ul v-if="value">
        <li v-for="data in computedList" :key="data.cinemaId">
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
</template>
<script>
import obj from '@/util/mixinsObj'
export default {
    mixins: [obj], // 混合
    computed: {
        computedList () {
            return this.$store.state.cinemasList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase())) || this.$store.state.cinemasList.filter(item => item.address.toUpperCase().includes(this.value.toUpperCase()))
        }
    },
    data () {
        return {
            value: ''
        }
    },
    methods: {
        onSearch () {

        },
        onCancel () {
            this.$router.back()
        }
    },
    mounted () {
        if (this.$store.state.cinemasList.length === 0) {
            this.$store.dispatch('getCinemasData', this.$store.state.cityId)
        } else {
            console.log('缓存')
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
