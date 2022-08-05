<template>
    <div>
        Nowplaying
        <ul>
            <li @click="handleChangePage(data.filmId)" v-for="(data,index) in dataList" :key="data.filmId">
                {{data.name}}
                <div>{{actorFilter(data.actors)}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            dataList: [],
        };
    },
    mounted() {
        axios
            .get(
                "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1418771",
                {
                    headers: {
                        "X-Client-Info":
                            '{"a":"3000","ch":"1002","v":"5.2.0","e":"16593314392095394284634113"}',
                        "X-Host": "mall.film-ticket.film.list",
                    },
                }
            )
            .then((res) => {
                this.dataList = res.data.data.films;
            });
    },
    methods:{
        handleChangePage(id){
            this.$router.push(`/detail/${id}`)
        },
        actorFilter(data){
            if (data === undefined) return '暂无主演'
            return data.map((item)=>item.name).join(" ")
        }
    }
};
</script>