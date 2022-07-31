<template>
  <div>
    <ul>
      <!-- vue-router 1 声明式导航 -->
        <!-- <router-link to="/films" active-class="jgckM" tag="li">电影</router-link>
        <router-link to="/cinemas" active-class="jgckM" tag="li">影院</router-link>
        <router-link to="/center" active-class="jgckM" tag="li">我的</router-link> -->

      <!-- vue-router 2 声明式导航 -->
        <router-link to="/films" custom v-slot="{navigate, isActive}" >
        <li @click="navigate" :class="isActive? 'jgckM':''">电影</li>
        </router-link>
        <router-link to="/cinemas" custom v-slot="{navigate, isActive}" >
        <li @click="navigate" :class="isActive? 'jgckM':''">影院</li>
        </router-link>
        <router-link to="/center" custom v-slot="{navigate, isActive}" >
        <li @click="navigate" :class="isActive? 'jgckM':''">我的</li>
        </router-link>
    </ul>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
// ES6 导出规范 -- babel ES6==>ES5
// @别名===》 src绝对路径

export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  .jgckM{
    color: red
  }
</style>
