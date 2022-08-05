<template>
    <div>
        hello--- 新写法
        {{myname}}
        <button @click="handleClick">change</button>
        <input type="text" v-model="obj.mytext">
        {{obj.mytext}}
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
export default {
    // vue3老写法或者是vue 写法中 的 beforeCreate ，created 生命周期==== setup
    data(){
        return {
            myname:'kerwin',
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    setup(){
        console.log('setup');
        const handleClick = ()=>{
            console.log(111);
        }
        
        // 定义一个状态
       const obj = reactive({
        mytext:''
       })
       return{
        obj,
        handleClick
       }
    }
}
</script>