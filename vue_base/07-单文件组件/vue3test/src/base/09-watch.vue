<template>
    <div>
        watch
        <input type="text" v-model="mytext" @input="handleInput" />
        <ul>
            <li v-for="data in datalist" :key="data">
                {{ data }}
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";
export default {
    setup() {
        const obj = reactive({
            mytext: "",
            datalist: ["aaa", "ccc", "sss", "eee", "sdsa", "dsad", "ddds"],
            newdatalist: ["aaa", "ccc", "sss", "eee", "sdsa", "dsad", "ddds"],
        });
        const handleInput = () => {
            console.log(
                obj.datalist.filter((item) => item.includes(obj.mytext))
            );
        };
        const computedList = computed(() => {
            console.log("computed");
            // 计算属性具有缓存  多次调用可以提升性能
            return obj.datalist.filter((item) => item.includes(obj.mytext));
        });

        // 第一个参数 需要监听的值  第二个参数 是监听值改变后的回调函数
        watch(
            () => obj.mytext,
            () => {
                obj.datalist = obj.newdatalist.filter((item) => item.includes(obj.mytext))
            }
        );

        return {
            ...toRefs(obj),
            handleInput,
        };
    },
};
</script>