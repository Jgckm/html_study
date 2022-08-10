<template>
    <div>
        <input type="text" v-model="mytext">
        <ul>
            <li v-for="data in computedList" :key="data">
                {{data}}
            </li>
        </ul>
    {{filterlist()}}
    {{filterlist()}}
    {{filterlist()}}
    {{computedList}}
    {{computedList}}
    </div>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import { computed } from '@vue/runtime-core';
export default {
    setup() {
        const obj = reactive({
            mytext:'',
            datalist: ['aaa','ccc','sss','eee','sdsa','dsad','ddds']
        });
        const filterlist = ()=>{
            console.log('filterlist');
            return obj.datalist.filter(item=>item.includes(obj.mytext))
        }
        const computedList = computed(()=>{
            console.log('computed');
            // 计算属性具有缓存  多次调用可以提升性能
            return obj.datalist.filter(item=>item.includes(obj.mytext))
        })
        return {
            ...toRefs(obj),
            filterlist,
            computedList
        };
    },
};
</script>