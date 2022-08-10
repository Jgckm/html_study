<template>
    <div>
        <div style="background:yellow" v-show="isShow">header</div>
        <div v-show="$store.state.isTabbarShow">
            <!-- navigate: 控制点击跳转组件 | :class="{ 'active': isActive}" 此行控制路由激活样式  -->
            <router-link to="/films" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'jgckM' : ''">电影</li>
            </router-link>
            <router-link to="/cinema" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'jgckM' : ''">影院</li>
            </router-link>
            <router-link to="/center" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'jgckM' : ''">我的</li>
            </router-link>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
export default {
    setup() {
        const isShow = ref(true)

        provide('jgckMShow',isShow)
        return {
            isShow
        }
    }
}
</script>
<style lang="scss" scoped>
.jgckM {
    color: red;
}
</style>