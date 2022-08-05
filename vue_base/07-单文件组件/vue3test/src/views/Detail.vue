<template>
    <div>
        detail
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit('hide')
        console.log(this.$route.params.id);
    },
    // beforeDestroy 替换为 beforeUnmount 销毁组件之前要做的事情
    beforeUnmount(){
        console.log(22);
    },
    // destroyed 替换为 unmounted  销毁组件键后 要做到事件
    unmounted(){
        this.$store.commit('show')
    }
}
</script>