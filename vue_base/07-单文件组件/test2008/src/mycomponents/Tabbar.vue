<template>
  <footer>
    <ul>
      <!-- vue-router 1 声明式导航 -->
      <!-- <router-link to="/films" active-class="jgckM" tag="li">电影</router-link>
        <router-link to="/cinemas" active-class="jgckM" tag="li">影院</router-link>
        <router-link to="/center" active-class="jgckM" tag="li">我的</router-link> -->

      <!-- vue-router 2 声明式导航 -->
      <router-link to="/films" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'jgckM' : ''">
            <i class="fa fa-film" aria-hidden="true"></i>
            <span>电影</span>
            </li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'jgckM' : ''">
            <i class="fa fa-university" aria-hidden="true"></i>
            <span>影院</span>
            </li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'jgckM' : ''">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span>我的</span>
        </li>
      </router-link>
    </ul>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  z-index: 2;
  width: 100%;
  height: 2.7222rem;
  position: fixed;
  bottom: -0.2778rem;
  left: 0;
  ul {
    display: flex;
    background: #fff;
    li {
        flex: 1;
        text-align: center;
        line-height: 1.3889rem;
        display: flex;
        flex-direction: column;
        i{
            font-size: 20px;
        }
        span{
            font-size: 16px;
        }
    }
  }
}
.jgckM {
  color: red;
}
</style>
