<template>
    <div>
        通信
        <navbar myname='home' myid='111' @event='change'></navbar>
        <siderbar v-show="isShow"></siderbar>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import navbar from './components/child'
import siderbar from './components/sdierbar'
export default {
    components:{
        navbar,
        siderbar
    }
    ,setup() {
        const obj = reactive({
            isShow: true
        })
        const change = ()=>{
            obj.isShow = !obj.isShow
        }
        return {
            ...toRefs(obj),
            change
        }
    }
}
</script>