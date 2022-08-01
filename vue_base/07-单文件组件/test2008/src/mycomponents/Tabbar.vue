<template>
  <footer>
    <ul>
      <!-- vue-router 1 声明式导航 -->
      <!-- <router-link to="/films" active-class="jgckM" tag="li">电影</router-link>
        <router-link to="/cinemas" active-class="jgckM" tag="li">影院</router-link>
        <router-link to="/center" active-class="jgckM" tag="li">我的</router-link> -->

      <!-- vue-router 2 声明式导航 -->
      <router-link to="/films" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'jgckM' : ''">电影</li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'jgckM' : ''">影院</li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'jgckM' : ''">我的</li>
      </router-link>
    </ul>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 20.8333rem;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 2.7222rem;
  ul {
    display: flex;
    li {
        flex: 1;
        text-align: center;
        line-height: 2.7222rem;
    }
  }
}
.jgckM {
  color: red;
}
</style>
