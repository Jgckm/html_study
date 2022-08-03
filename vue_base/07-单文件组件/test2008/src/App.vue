<template>
  <div>
    <tabbar></tabbar>
    <!-- 路由容器 -->
    <section>
    <router-view></router-view>
    </section>
  </div>
</template>
<script>
// ES6 导出规范 -- babel ES6==>ES5
// @别名===》 src绝对路径
import tabbar from '@/mycomponents/Tabbar'
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css' // 全局定义的组件

Vue.use(Vant)
export default {
  data () {
    return {}
  },
  components: {
    tabbar
  }
}
</script>
<style lang="scss">
body{
  font-size: 16px;
}
*{
  margin: 0;
  padding: 0;
}
li{
    list-style: none;
}
section{
  margin-bottom: 2.7222rem;
}
</style>
