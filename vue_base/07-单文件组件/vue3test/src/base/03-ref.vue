<template>
    <div>
        hello3--- ref新写法
        <!-- 不用 .value 会自动获取值 -->
        {{ mytext }} 
        <button @click="handleClick">change</button>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    // vue3老写法或者是vue 写法中 的 beforeCreate ，created 生命周期==== setup
    
    // 定义一个状态
    setup() {
        const mytext = ref('测试')
        console.log(mytext);
        const handleClick = ()=>{
            mytext.value = 'hello'
        }

        return {
            handleClick,
            mytext,
        }
    },
};
</script>