<template>
    <div>
        Nowplaying
        <ul>
            <li @click="handleChangePage(data.filmId)" v-for="(data) in dataList" :key="data.filmId">
                {{data.name}}
                <div>{{actorFilter(data.actors)}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
import { reactive, toRefs } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter() // router === this.$router
        const obj = reactive({
            dataList:[]
        })
        const handleChangePage =(id)=>{
            console.log(id);
            router.push(`/detail/${id}`)
        }
         const actorFilter = (data)=>{
            if (data === undefined) return '暂无主演'
            return data.map((item)=>item.name).join(" ")
        }

        onMounted(()=>{
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
                obj.dataList = res.data.data.films;
            });
        }) 
        return{
            ...toRefs(obj),
            handleChangePage,
            actorFilter

        }
    },
    
    
};
</script>