<template>
    <div>
        生命周期
        <ul>
            <li v-for="data in list" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
import { onBeforeMount, onMounted, reactive, toRefs } from '@vue/runtime-core'
export default {
    setup() {
        const obj = reactive({
            list:[]
        })
        onBeforeMount(( )=>{
            console.log('dom上树之前');
        })

        onMounted(()=>{
            console.log('dom上树',`axios 监听事件 setinterval。。。`);
            setTimeout(() => {
                obj.list = ['aaaa','vvvvvv','tteeee']
            }, 2000);
        })
        return {
            ...toRefs(obj)
        }
    }
}
</script>