<template>
    <div>
        hello3--- 新写法
        {{ myname }}
        <button @click="handleClick">change</button>
     
    </div>
</template>
<script>
import { reactive,toRefs} from "vue";
export default {
    // vue3老写法或者是vue 写法中 的 beforeCreate ，created 生命周期==== setup
    
    // 定义一个状态
    setup() {
        const obj = reactive({
            myname: "nine",
            myage: 100,
            mytext: "",
        });

        // console.log('setup');
        const handleClick = () => {
            // console.log(111);
            obj.mytext;
        };
        return {
            ...toRefs(obj),
            handleClick,
        };
    },
};
</script>