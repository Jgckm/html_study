<template>
    <div>
        <div>deatail</div>
    </div>
</template>
<script>
import { inject, onMounted, onUnmounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
    setup() {
        const route = useRoute() // route === this.$route
        const store = useStore() // store === this.$store
        const isShow = inject('jgckMShow')
        store.commit('hide')
        onMounted(()=>{
             console.log(route.params.id);
             isShow.value = false
        })
        onUnmounted(()=>{
            store.commit('show')
            isShow.value = true
        })

    },
    // beforeDestroy 替换为 beforeUnmount 销毁组件之前要做的事情
    // beforeUnmount() {
    //     console.log(22);
    // },
    // // destroyed 替换为 unmounted  销毁组件键后 要做到事件
    // unmounted() {
    //     this.$store.commit("show");
    // },
};
</script>